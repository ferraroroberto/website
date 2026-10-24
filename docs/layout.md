# Layout

Where code and content go. `scripts/structure_ratchet.py` checks the root folders against `shape = "static-site"` plus `extra_roots` in `.fleet.toml`, and caps file size (1,000 lines), function length (100 lines) and flat directories (40 modules) beyond `.structure-ratchet-baseline.json`.

```
website/
├── index.html, workshop.html   # the pages: the index and the one workshop template (?w=<slug>)
├── <slug>.html                 # redirect shim to workshop.html?w=<slug>, so legacy URLs keep working
├── css/                        # styles.css (workshop pages), workshop-index.css (index page)
├── js/                         # browser scripts: main.js fills the template, workshop-index.js the index, iframe-resize.js and linkedin-fix.js are shared helpers
├── config/                     # workshop-base.js factory plus one <slug>-config.js per workshop, and workshops-index-config.js
├── data/                       # _export.js helper, one <slug>-testimonials.js and <slug>-benefits.js per workshop, shared illustrations.js
├── illustrations/              # illustration images referenced from data/illustrations.js
├── images/                     # testimonial portraits and the group photo, referenced from the testimonial data files
├── docs/                       # architecture.mmd and this file
└── scripts/                    # verify-before-ship.ps1 (the gate) and the vendored ratchet scripts
```

## Declared exceptions

`static-site` lists `css`, `js`, `assets` and `games`. Five more root folders are declared in `extra_roots`:

- `config/` and `data/`: the data-driven design keeps every workshop's settings and content out of `workshop.html`, so they sit beside `js/` as plain scripts the pages include with relative paths.
- `illustrations/` and `images/`: the image files the data files point at by relative path. They stay at the root so those paths, and the embedded Squarespace pages that load them, keep resolving.
- `scripts/`: the gate (`verify-before-ship.ps1`) and the vendored `structure_ratchet.py` and `instruction_ratchet.py`. Nothing in it ships to the browser.

## Where new code goes

- A new workshop: `config/<slug>-config.js`, `data/<slug>-testimonials.js`, `data/<slug>-benefits.js` and a redirect shim, per `WORKSHOP_STRUCTURE.md`.
- A new shared browser helper: `js/`. A new stylesheet: `css/`.
- A new root folder: declare it in `extra_roots` with a line in this file, never by leaving it undeclared.
