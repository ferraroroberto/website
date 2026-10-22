#Requires -Version 5.1
<#
.SYNOPSIS
    Pre-ship verification gate for the website. One pass/fail pipeline.

.DESCRIPTION
    Runs the structure ratchet (scripts/structure_ratchet.py): file size, function
    length, flat directories and the root layout against .fleet.toml's `shape` and
    `extra_roots`, beyond the committed .structure-ratchet-baseline.json. The site is
    static, so this is the whole gate; it exits non-zero on any non-zero ratchet
    exit, exit 3 ("not confirmed": git unusable, an unparseable file, an unknown
    shape) included. Run from anywhere:  & .\scripts\verify-before-ship.ps1
#>
[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..")

# The ratchet is stdlib-only (Python 3.11+), so the repo's .venv is optional here.
$py = ".\.venv\Scripts\python.exe"
if (-not (Test-Path $py)) {
    $found = Get-Command python -ErrorAction SilentlyContinue
    if (-not $found) {
        Write-Host "[FAIL] no Python found: neither $py nor python on PATH" -ForegroundColor Red
        exit 1
    }
    $py = $found.Source
}

Write-Host "==> structure ratchet" -ForegroundColor Cyan
& $py "scripts/structure_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] structure ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "[OK] gate passed" -ForegroundColor Green
