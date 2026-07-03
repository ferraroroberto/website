# Workshop Website - Roberto Ferraro

## Overview

A multi-workshop landing site for Roberto Ferraro's professional development workshops. Built with clean separation of concerns: a single `workshop.html` template driven by per-workshop config and data files, plus a central index page listing all workshops.

## Live Pages

🌐 **Workshop index**: https://www.robertoferraro.net/workshops
🌐 **Virtual Communication**: https://www.robertoferraro.net/virtual-communication
🌐 **Personal Branding**: https://www.robertoferraro.net/personal-branding
🌐 **Digital Leadership**: https://www.robertoferraro.net/digital-leadership

## Project Structure

```
website/
├── index.html                          # Workshop index (main landing page)
├── workshop.html                       # Single template for all workshop pages (?w=<slug>)
├── virtual-communication.html          # Redirect shim → workshop.html?w=virtual-communication
├── personal-branding.html              # Redirect shim → workshop.html?w=personal-branding
├── digital-leadership.html             # Redirect shim → workshop.html?w=digital-leadership
├── css/
│   ├── styles.css                      # Workshop page styles
│   └── workshop-index.css             # Index page styles
├── js/
│   ├── main.js                         # Dynamic content population for workshop pages
│   ├── workshop-index.js               # Workshop index page logic
│   ├── iframe-resize.js               # Shared sendHeight() postMessage helper
│   └── linkedin-fix.js                # Embedded-browser (LinkedIn/WebView) link handler
├── config/
│   ├── workshop-base.js               # Shared factory: buildLumaUrl() + createWorkshopConfig()
│   ├── virtual-communication-config.js # Virtual Communication per-workshop config
│   ├── personal-branding-config.js    # Personal Branding per-workshop config
│   ├── digital-leadership-config.js   # Digital Leadership per-workshop config
│   └── workshops-index-config.js      # Workshop index page config
├── data/
│   ├── _export.js                     # Shared exposeData() helper (window, browser-only)
│   ├── virtual-communication-testimonials.js # Virtual Communication testimonials
│   ├── virtual-communication-benefits.js    # Virtual Communication benefits
│   ├── personal-branding-testimonials.js
│   ├── personal-branding-benefits.js
│   ├── digital-leadership-testimonials.js
│   ├── digital-leadership-benefits.js
│   └── illustrations.js              # Shared illustrations
├── illustrations/                     # Local illustration assets
├── images/                            # Local image assets
└── README.md                          # This file
```

## Architecture

> For the full multi-workshop layout, file naming conventions, and step-by-step guide for adding a new workshop, see **[WORKSHOP_STRUCTURE.md](WORKSHOP_STRUCTURE.md)**.

### Data-Driven Design
- **`workshop.html`**: Single template page — content injected by JS at load time for whichever `?w=<slug>` is requested
- **Per-workshop configs** (`config/<slug>-config.js`): Override title, dates, pricing, video ID, SEO meta — call `createWorkshopConfig()` from the shared base
- **Shared base** (`config/workshop-base.js`): `buildLumaUrl()` helper + `createWorkshopConfig()` factory used by every per-workshop config
- **Data files** (`data/<slug>-testimonials.js`, `data/<slug>-benefits.js`): Content separated by type for easy maintenance
- **Redirect shims** (`virtual-communication.html`, etc.): Thin redirect shims that carry per-page SEO meta (canonical + Open Graph + Twitter tags, `http-equiv="refresh"` fallback, and a "Continue" link) and immediately `location.replace` to the template URL — keep old URLs working

### JavaScript Roles
- **`js/main.js`**: Populates the workshop template with title, subtitle, dates, pricing, benefits, testimonials, and illustrations; sets CTA button `href` via `buildLumaUrl()` — HTML uses `href="#"` as a no-JS fallback only
- **`js/workshop-index.js`**: Drives the workshop index (`index.html`) — reads `workshops-index-config.js`
- **`js/iframe-resize.js`**: Shared `sendHeight()` postMessage logic for Squarespace iframe embedding
- **`js/linkedin-fix.js`**: Detects LinkedIn/WebView embedded browsers and overrides link-click behaviour so CTA buttons open in the system browser

## Key Features

### Design System
- **Color Scheme**: Black/white with yellow accent (#FFCC00) for workshop pages. The workshop index uses per-workshop accent gradients (blue for Virtual Communication, red/orange for Personal Branding, green for Digital Leadership) — see `css/workshop-index.css` and the "Color Schemes" section in WORKSHOP_STRUCTURE.md
- **Typography**: Poppins for headers, system fonts for body
- **Layout**: CSS Grid and Flexbox for responsive design
- **Mobile-First**: Responsive design with mobile breakpoints

### Content Management
- **Centralized Configuration**: Easy updates to dates, prices, event IDs
- **Modular Data**: Testimonials, benefits, and images in separate files
- **Dynamic Population**: Content loaded from data files via JavaScript
- **SEO Optimized**: Meta tags, semantic HTML, proper heading structure

### Technical Integration
- **Luma Events**: Complete checkout integration
- **YouTube Embed**: Responsive video container
- **External Resources**: Google Fonts, favicon, CDN images

## File Descriptions

See [WORKSHOP_STRUCTURE.md](WORKSHOP_STRUCTURE.md) for the complete annotated file list and how each piece fits together. Key pointers:

- **`config/workshop-base.js`** — shared factory; every per-workshop config calls `createWorkshopConfig()` from here
- **`config/<slug>-config.js`** — per-workshop overrides (event ID, title, dates, pricing, video, SEO meta)
- **`data/_export.js`** — `exposeData(name, value)` helper that sets `window[name]` (browser-only; no CommonJS/`module.exports` path — nothing requires these files directly)
- **`data/illustrations.js`** — shared across all workshops; per-workshop data files follow `<slug>-testimonials.js` / `<slug>-benefits.js` naming

## Maintenance Guide

### Updating Workshop Details
1. Edit `config/<slug>-config.js` for the workshop you want to change (e.g. `config/virtual-communication-config.js` for Virtual Communication)
2. Update event ID, dates, pricing, video ID as needed
3. **No HTML changes required** — `workshop.html` is a template

### Adding/Editing Testimonials or Benefits
1. Edit `data/<slug>-testimonials.js` or `data/<slug>-benefits.js` for the target workshop
2. **Content updates automatically!**

### Changing Images
1. Update URLs in `data/illustrations.js` (shared) or the per-workshop data file
2. Replace local files in `illustrations/` or `images/`
3. Update alt text for accessibility

### Adding a New Workshop
See the step-by-step guide in [WORKSHOP_STRUCTURE.md](WORKSHOP_STRUCTURE.md#how-to-add-a-new-workshop).

### Styling Changes
1. Edit `css/styles.css`
2. Follow the organized section structure
3. Test responsive behavior

## Deployment

### File Structure
- Maintain the modular structure
- Ensure all paths are relative
- Test all external resources
- Validate HTML and CSS

### Testing Checklist
- [ ] All data files load correctly
- [ ] Content populates dynamically
- [ ] Luma integration functions
- [ ] Responsive design on all devices
- [ ] Images load properly
- [ ] JavaScript console is clean
- [ ] SEO meta tags are present
- [ ] Fallback behavior works if JS fails

## Embed Code

### Basic Embed
```html
<iframe 
    src="https://www.robertoferraro.net/virtual-communication" 
    width="100%" 
    height="800" 
    frameborder="0" 
    scrolling="yes"
    title="Master Virtual Meetings Workshop">
</iframe>
```

### Responsive Embed
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe 
        src="https://www.robertoferraro.net/virtual-communication"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        title="Master Virtual Meetings Workshop">
    </iframe>
</div>
```

## Advanced: Responsive Dynamic-Height Iframe Embedding

### Overview
Complete solution for embedding this Netlify-hosted page into Squarespace (or any other platform) with responsive, scroll-free behavior and automatic height adjustment.

### Goal
Embed the custom page into a Squarespace site using an `<iframe>` while ensuring:
- ✅ Mobile responsiveness
- ✅ No awkward scrolling behavior  
- ✅ Full content visibility without cut-off
- ✅ Automatic synchronization with GitHub (via Netlify builds)

### Implementation

#### Step 1: Embed the iframe in Squarespace
Add this code to a Squarespace Code Block:

```html
<div id="iframe-container" style="width: 100%;">
  <iframe 
    id="autoResizingIframe"
    src="https://www.robertoferraro.net/virtual-communication"
    style="width: 100%; border: none;"
    scrolling="no"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'setHeight') {
      const iframe = document.getElementById('autoResizingIframe');
      if (iframe && event.data.height) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });
</script>
```

**Features:**
- Sets up an iframe that can grow dynamically in height
- Listens for messages from the iframe content that report actual content height
- Enables seamless integration without scrollbars

#### Step 2: Send iframe height from the hosted page
No action needed — every page already loads [`js/iframe-resize.js`](js/iframe-resize.js), which reports the page's content height to the parent via `postMessage({ type: 'setHeight', height })` on `load`, `resize`, and a 1-second interval. The listener in Step 1 is the matching half on the Squarespace side. See `js/iframe-resize.js` for the implementation rather than copying it here (so this doc can't drift from the shipped code).

### Result
- ✅ Seamless integration of Netlify content in Squarespace
- ✅ Full height support without scrollbars or content clipping
- ✅ Works on both desktop and mobile
- ✅ Content stays in sync automatically with GitHub via Netlify builds

### Security Improvements (Optional)
- Replace `'*'` in `postMessage(..., '*')` with your Squarespace domain for added security
- Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to your Netlify page's `<head>` for better responsive layout

### Technical Notes
- **Cross-Origin Communication**: Uses `postMessage` API for secure parent-child iframe communication
- **Dynamic Height Detection**: Monitors both `documentElement.scrollHeight` and `body.scrollHeight` for maximum compatibility
- **Event-Driven Updates**: Responds to both `load` and `resize` events for optimal performance
- **Fallback Mechanism**: `setInterval` ensures height updates even with dynamically changing content

## Contributing

- Follow the existing patterns and naming conventions (see [WORKSHOP_STRUCTURE.md](WORKSHOP_STRUCTURE.md) and `CLAUDE.md`).
- JavaScript uses 4-space indentation, vanilla JS only (no jQuery, no framework).
- Keep the site data-driven: change a workshop by editing its `config/<slug>-config.js` and `data/<slug>-*.js`, not `workshop.html`.
- Test that content still populates and the page degrades gracefully with JS disabled before committing.