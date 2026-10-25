# Project Instructions

## What this project is

Multi-workshop landing site for Roberto Ferraro's professional-development workshops, deployed on **Netlify** (`robertoferraro.net`), embedded into Squarespace via dynamic-height iframe. **Data-driven:** one `workshop.html` template renders any workshop from per-slug config + data files. No framework, no jQuery — vanilla HTML/CSS/JS only (`package.json` exists but the site is static; all paths relative).

> Full layout + "add a new workshop" guide: `WORKSHOP_STRUCTURE.md`.

## Stack & layout

- `index.html` — workshop index landing page.
- `workshop.html` — **single template** for every workshop, selected by `?w=<slug>`.
- `virtual-communication.html`, `personal-branding.html`, `digital-leadership.html` — **redirect shims** → `workshop.html?w=<slug>` (keep legacy URLs working).
- `config/`
  - `workshop-base.js` — shared factory: `createWorkshopConfig()` + `buildLumaUrl()`.
  - `<slug>-config.js` — per-workshop overrides (event ID, title, dates, pricing, video, SEO meta); each calls `createWorkshopConfig()`.
  - `workshops-index-config.js` — index page config.
- `data/`
  - `_export.js` — `exposeData(name, value)` helper (sets `window[name]`; browser-only, no CommonJS/`module.exports` path).
  - `<slug>-testimonials.js`, `<slug>-benefits.js` — per-workshop content; `illustrations.js` is shared.
- `js/` — `main.js` (populates the template), `workshop-index.js`, `iframe-resize.js` (`sendHeight()` postMessage for Squarespace embedding), `linkedin-fix.js` (opens CTAs in the system browser from LinkedIn/WebView).

## Internal architecture

[`docs/architecture.mmd`](docs/architecture.mmd) — hand-authored Mermaid diagram of this repo's internal structure (entry pages, `config/`, `data/`, `js/`, `css/`, external deps: Luma/Netlify/Squarespace). Update in the same PR as any structural change (new slug, renamed data/config file, new external dependency) — anti-staleness contract, same as `.fleet.toml`'s `description`. Not auto-generated; no test coverage.

## Conventions

- **Data-driven, no HTML edits for content.** Edit `config/<slug>-config.js` and `data/<slug>-*.js` — `workshop.html` stays untouched.
- Every per-workshop config **calls `createWorkshopConfig()`**; don't hand-roll a config object.
- Data files export via **`exposeData(name, value)`** (`data/_export.js`) — `window[name]` only, no CommonJS path; don't add a `require()`-based consumer without first extending `_export.js`.
- **Progressive enhancement:** HTML ships `href="#"` / placeholder fallbacks; JS populates real content and CTA hrefs (`buildLumaUrl()`). Must degrade gracefully if JS fails.
- **All paths relative** (Netlify + iframe embedding). Mobile-first; workshop pages: black/white, yellow accent `#FFCC00`, Poppins headers. Index page: per-workshop accent gradients (blue/red/green) — `css/workshop-index.css`.
- **Adding a workshop:** follow `WORKSHOP_STRUCTURE.md` (new config + data files + redirect shim, then link from the index).
- **A structure ratchet gates the repo.** `scripts/verify-before-ship.ps1` runs the vendored `scripts/structure_ratchet.py` (byte-for-byte from project-scaffolding; re-vendor with `/propagate-vendored structure_ratchet`, never edit) and fails when a file passes 1,000 lines, a function 100 lines or a flat directory 40 modules and is new or above its entry in `.structure-ratchet-baseline.json` (today only the 205-line anonymous function in `js/linkedin-fix.js`, recorded at its real size), or when the root folders do not match `shape = "static-site"` plus `extra_roots` in `.fleet.toml`. A new root folder is declared in `extra_roots` and `docs/layout.md`, not allowed by default. Burn the baseline down with `--update-baseline`; only `--allow-additions` adds. Exit 3 (could not measure) is NOT CONFIRMED and fails. Layout: [`docs/layout.md`](docs/layout.md).
- **A static ratchet gates duplication.** The same script runs the vendored `scripts/static_ratchet.py` (re-vendor with `/propagate-vendored static_ratchet`, never edit): `jscpd`, pinned and run through `npx`, fails on an exact clone that `.static-ratchet-baseline.json` does not record, and the baseline is empty today. The site has no Python, so ruff finds nothing. Node is a prerequisite, and exit 3 (no Node, no network on the first `npx`) is NOT CONFIRMED and fails.
- **A docs ratchet gates the README and `docs/`.** The same script runs the vendored `scripts/docs_ratchet.py` (re-vendor with `/propagate-vendored docs_ratchet`, never edit): it fails when `README.md` passes 40 KiB or when `README.md` or `docs/**/*.md` carry more history markers (an issue reference, a dated or changelog heading) than `.docs-ratchet-baseline.json` records, and the baseline is empty today. State what is true now, not how it got there.
- **A comment ratchet gates history comments.** The same script runs the vendored `scripts/comment_ratchet.py` (re-vendor with `/propagate-vendored comment_ratchet`, never edit): it fails when a `.js`, `.css` or `.ps1` file carries more `#NNN` issue references in its comments than `.comment-ratchet-baseline.json` records, and the baseline is empty today. A comment states the present-tense why.

## Running locally

Static site:

```bash
python -m http.server 8000   # then http://localhost:8000/
# or: npx serve .
```

Preview a workshop via `http://localhost:8000/workshop.html?w=virtual-communication`.

## Git
*Restated deliberately: agents reaching this repo through `AGENTS.md` alone never see the machine config.*

Conventional commit prefixes (`feat:` `fix:` `refactor:` `docs:` `chore:`). Never add `Co-Authored-By: Claude` or any AI-attribution trailer. Don't commit or push unless asked.
