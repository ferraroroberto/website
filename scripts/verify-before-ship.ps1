#Requires -Version 5.1
<#
.SYNOPSIS
    Pre-ship verification gate for the website. One pass/fail pipeline.

.DESCRIPTION
    Runs the structure ratchet (scripts/structure_ratchet.py): file size, function
    length, flat directories and the root layout against .fleet.toml's `shape` and
    `extra_roots`, beyond the committed .structure-ratchet-baseline.json. The site is
    static, so the ratchets are the whole gate; it exits non-zero on any non-zero ratchet
    exit, exit 3 ("not confirmed": git unusable, an unparseable file, an unknown
    shape) included. Then the instruction ratchet (scripts/instruction_ratchet.py): the
    weekly prompt audit's deterministic rules over CLAUDE.md and AGENTS.md, beyond the
    committed .instruction-ratchet-baseline.json, same exit contract. Then the doc refs
    ratchet (scripts/doc_refs_ratchet.py): README.md, CLAUDE.md and docs/ naming a path,
    link or module that does not exist, beyond the committed .doc-refs-ratchet-baseline.json,
    same exit contract. Then the static ratchet (scripts/static_ratchet.py): duplicated
    code (jscpd, run through npx) beyond the committed .static-ratchet-baseline.json, same
    exit contract. Then the docs ratchet (scripts/docs_ratchet.py): the README's size and
    the history markers (issue references, dated or changelog headings) in README.md and
    docs/, beyond the committed .docs-ratchet-baseline.json, same exit contract. Then the
    comment ratchet (scripts/comment_ratchet.py): issue references in JavaScript, CSS and
    PowerShell comments, beyond the committed .comment-ratchet-baseline.json, same exit
    contract. Then the dead code ratchet (scripts/dead_code_ratchet.py): Python definitions
    nothing references, beyond the committed .dead-code-ratchet-baseline.json, same exit
    contract. Then the conventions ratchet (scripts/conventions_ratchet.py): the no-window and
    no-drive-path rules over tracked Python, beyond the committed
    .conventions-ratchet-baseline.json, same exit contract. Run from anywhere:  & .\scripts\verify-before-ship.ps1
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

Write-Host "==> instruction ratchet" -ForegroundColor Cyan
& $py "scripts/instruction_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] instruction ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> doc refs ratchet" -ForegroundColor Cyan
& $py "scripts/doc_refs_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] doc refs ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> static ratchet" -ForegroundColor Cyan
& $py "scripts/static_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] static ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> docs ratchet" -ForegroundColor Cyan
& $py "scripts/docs_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] docs ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> comment ratchet" -ForegroundColor Cyan
& $py "scripts/comment_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] comment ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> dead code ratchet" -ForegroundColor Cyan
& $py "scripts/dead_code_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] dead code ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "==> conventions ratchet" -ForegroundColor Cyan
& $py "scripts/conventions_ratchet.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[FAIL] conventions ratchet (exit $LASTEXITCODE)" -ForegroundColor Red
    exit 1
}

Write-Host "[OK] gate passed" -ForegroundColor Green
