# Project Instructions

Canonical instructions for AI coding agents working in this repository. Claude Code reads this file directly as project memory. Other agents (Cursor, Codex, etc.) reach it via the one-line `AGENTS.md` pointer.

## Plan mode is the default

Every non-trivial request starts in plan mode (anything beyond a one-line fix, a typo, or a question answerable without touching code). In plan mode: investigate freely, but don't edit files, run destructive commands, or commit. Present the plan, and only execute after explicit approval.

## What this project is

A multi-workshop landing site for Roberto Ferraro's professional-development workshops, deployed on **Netlify** (`robertoferraro.net`) and embedded into Squarespace via a dynamic-height iframe. **Data-driven:** one `workshop.html` template renders any workshop from per-slug config + data files. No framework, no jQuery — vanilla HTML/CSS/JS only (a `package.json` exists but the site is static, all paths relative).

> For the full annotated layout and the step-by-step "add a new workshop" guide, see `WORKSHOP_STRUCTURE.md`.

## Stack & layout

- `index.html` — workshop index landing page.
- `workshop.html` — **single template** for every workshop, selected by `?w=<slug>`.
- `virtual-communication.html`, `personal-branding.html`, `digital-leadership.html` — thin **redirect shims** → `workshop.html?w=<slug>` (keep legacy URLs working).
- `config/`
  - `workshop-base.js` — shared factory: `createWorkshopConfig()` + `buildLumaUrl()`.
  - `<slug>-config.js` — per-workshop overrides (event ID, title, dates, pricing, video, SEO meta); each calls `createWorkshopConfig()`.
  - `workshops-index-config.js` — index page config.
- `data/`
  - `_export.js` — `exposeData(name, value)` helper (sets both `window[name]` and `module.exports`).
  - `<slug>-testimonials.js`, `<slug>-benefits.js` — per-workshop content; `illustrations.js` is shared.
- `js/` — `main.js` (populates the template), `workshop-index.js`, `iframe-resize.js` (`sendHeight()` postMessage for Squarespace embedding), `linkedin-fix.js` (opens CTAs in the system browser from LinkedIn/WebView).

## Conventions

- **Data-driven, no HTML edits for content.** To change a workshop, edit `config/<slug>-config.js` and `data/<slug>-*.js` — `workshop.html` is a template and stays untouched.
- Every per-workshop config **calls `createWorkshopConfig()`** from `config/workshop-base.js`; don't hand-roll a config object.
- Data files export via **`exposeData(name, value)`** from `data/_export.js` — preserve the dual `window` / `module.exports` export.
- **Progressive enhancement:** HTML ships `href="#"` / placeholder fallbacks; JS populates real content and CTA hrefs (`buildLumaUrl()`). The page must degrade gracefully if JS fails.
- **All paths relative** (Netlify hosting + iframe embedding). Mobile-first; design system is black/white with yellow accent `#FFCC00`, Poppins for headers.
- **Adding a workshop:** follow the step-by-step guide in `WORKSHOP_STRUCTURE.md` (new config + data files + redirect shim, then link from the index).

## Running locally

Static site:

```bash
python -m http.server 8000   # then http://localhost:8000/
# or: npx serve .
```

Preview a workshop via `http://localhost:8000/workshop.html?w=virtual-communication`.

## Git

Conventional commit prefixes (`feat:` `fix:` `refactor:` `docs:` `chore:`). Never add `Co-Authored-By: Claude` or any AI-attribution trailer. Don't commit or push unless asked.
