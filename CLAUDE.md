# Project Instructions

Multi-workshop landing site for Roberto Ferraro's professional-development workshops, deployed on **Netlify** (`robertoferraro.net`) and embedded in Squarespace via a dynamic-height iframe. **Data-driven:** one `workshop.html` template renders any workshop from per-slug config + data files. Vanilla HTML/CSS/JS, no framework or jQuery; a `package.json` exists but the site is static, all paths relative.

> Annotated layout and the "add a new workshop" guide: `WORKSHOP_STRUCTURE.md`.

## Stack & layout

- `index.html` — workshop index landing page.
- `workshop.html` — **single template** for every workshop, selected by `?w=<slug>`.
- `virtual-communication.html`, `personal-branding.html`, `digital-leadership.html` — thin **redirect shims** → `workshop.html?w=<slug>` (keep legacy URLs working).
- `config/` — `workshop-base.js` (shared factory: `createWorkshopConfig()` + `buildLumaUrl()`); `<slug>-config.js` (per-workshop overrides: event ID, title, dates, pricing, video, SEO meta; each calls `createWorkshopConfig()`); `workshops-index-config.js` (index page).
- `data/` — `_export.js` (`exposeData(name, value)`: sets `window[name]`, browser-only, no CommonJS/`module.exports` path); `<slug>-testimonials.js`, `<slug>-benefits.js` (per-workshop content); `illustrations.js` (shared).
- `js/` — `main.js` (populates the template), `workshop-index.js`, `iframe-resize.js` (`sendHeight()` postMessage for Squarespace embedding), `linkedin-fix.js` (opens CTAs in the system browser from LinkedIn/WebView).

## Internal architecture

[`docs/architecture.mmd`](docs/architecture.mmd) — hand-authored Mermaid diagram of this repo's internal structure (entry pages, `config/`, `data/`, `js/`, `css/`, external deps: Luma/Netlify/Squarespace). Update it in the **same PR** as any material structural change (new workshop slug, renamed data/config file, new external dependency). Not auto-generated, not covered by any test suite.

## Conventions

- **Data-driven, no HTML edits for content.** To change a workshop, edit `config/<slug>-config.js` and `data/<slug>-*.js` — `workshop.html` stays untouched.
- Every per-workshop config **calls `createWorkshopConfig()`** from `config/workshop-base.js`; don't hand-roll a config object.
- Data files export via **`exposeData(name, value)`** from `data/_export.js` — `window[name]` only; don't add a `require()`-based consumer without first making `_export.js` support CommonJS for real.
- **Progressive enhancement:** HTML ships `href="#"` / placeholder fallbacks; JS populates real content and CTA hrefs (`buildLumaUrl()`). The page must degrade gracefully if JS fails.
- **All paths relative** (Netlify hosting + iframe embedding). Mobile-first; workshop pages use black/white with yellow accent `#FFCC00`, Poppins for headers. The workshop index uses per-workshop accent gradients (blue/red/green) — see `css/workshop-index.css`.
- **Adding a workshop:** follow `WORKSHOP_STRUCTURE.md` (new config + data files + redirect shim, then link from the index).

## Running locally

```bash
python -m http.server 8000   # then http://localhost:8000/
# or: npx serve .
```

Preview a workshop via `http://localhost:8000/workshop.html?w=virtual-communication`.

## Git
*Restated deliberately: agents reaching this repo through `AGENTS.md` alone never see the machine config.*

Conventional commit prefixes (`feat:` `fix:` `refactor:` `docs:` `chore:`). Never add `Co-Authored-By: Claude` or any AI-attribution trailer. Don't commit or push unless asked.
