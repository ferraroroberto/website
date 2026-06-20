# Workshop Website Structure

This website supports multiple workshops driven by a single template page (`workshop.html`) and per-workshop config/data files.

## Structure Overview

### Main Files
- `index.html` - Workshop repository page (main landing page)
- `workshop.html` - **Single template page** for all workshops — chosen by `?w=<slug>`
- `virtual-communication.html` - Redirect shim → `workshop.html?w=virtual-communication`
- `personal-branding.html` - Redirect shim → `workshop.html?w=personal-branding`
- `digital-leadership.html` - Redirect shim → `workshop.html?w=digital-leadership`

### Configuration Files
- `config/workshop-base.js` - **Shared base**: `buildLumaUrl()` helper + `createWorkshopConfig()` factory
- `config/workshops-index-config.js` - Configuration for the workshop index page
- `config/virtual-communication-config.js` - Virtual Communication per-workshop overrides
- `config/personal-branding-config.js` - Personal Branding per-workshop overrides
- `config/digital-leadership-config.js` - Digital Leadership per-workshop overrides

### Data Files
- `data/_export.js` - **Shared export helper**: `exposeData(name, value)` — sets `window[name]` and `module.exports` in one call
- `data/virtual-communication-benefits.js` - Benefits for Virtual Communication workshop
- `data/virtual-communication-testimonials.js` - Testimonials for Virtual Communication workshop
- `data/personal-branding-benefits.js` - Benefits for Personal Branding workshop
- `data/personal-branding-testimonials.js` - Testimonials for Personal Branding workshop
- `data/digital-leadership-benefits.js` - Benefits for Digital Leadership workshop
- `data/digital-leadership-testimonials.js` - Testimonials for Digital Leadership workshop
- `data/illustrations.js` - Shared illustrations (used across all workshops)

### JavaScript Files
- `js/workshop-index.js` - JavaScript for the workshop index page
- `js/main.js` - Dynamic content population for individual workshop pages
- `js/iframe-resize.js` - **Shared** `sendHeight()` postMessage logic (referenced by all pages)

### CSS Files
- `css/styles.css` - Main styles (shared across all pages)
- `css/workshop-index.css` - Styles for the workshop index page

## How to Add a New Workshop

### 1. Create the config file
Create `config/new-workshop-config.js` using `createWorkshopConfig()` from the base. Only list the values that differ from `config/workshop-base.js`. The UTM campaign goes inside `utmParams.campaign` (source/medium come from the base); a flat `utmCampaign` is silently dropped by `buildLumaUrl()`.

```javascript
// config/new-workshop-config.js
const WORKSHOP_CONFIG = createWorkshopConfig({
    eventId: 'your-event-id',
    eventUrl: 'https://luma.com/your-event-id',

    // UTM campaign (source/medium come from the base)
    utmParams: {
        campaign: 'new-workshop'
    },

    title: 'Your Workshop Title',
    subtitle: 'Your workshop subtitle',
    date: 'Your workshop date',
    videoId: 'your-video-id',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    meta: { /* SEO metadata: title, description, ogUrl, ogImage, ... */ }
});

// Make available globally for inline use
if (typeof window !== 'undefined') {
    window.WORKSHOP_CONFIG = WORKSHOP_CONFIG;
    // Named export for the workshop index (single source of truth for shared fields).
    // Slug converted to UPPER_CASE: e.g. 'new-workshop' → WORKSHOP_CONFIG_NEW_WORKSHOP.
    window.WORKSHOP_CONFIG_NEW_WORKSHOP = WORKSHOP_CONFIG;
}
```

### 2. Create data files
Create the benefits and testimonials files using `exposeData()` from `data/_export.js`. The name passed to `exposeData()` is the global `main.js` reads — use `BENEFITS_DATA` and `TESTIMONIALS_DATA`:

```javascript
// data/new-workshop-benefits.js
const BENEFITS_DATA = [ /* { title, description }, ... */ ];

exposeData('BENEFITS_DATA', BENEFITS_DATA);
```

### 3. Register the slug in workshop.html
Add the slug and its three script paths to the `WORKSHOPS` map inside `workshop.html`:

```javascript
'new-workshop': {
  config: 'config/new-workshop-config.js',
  testimonials: 'data/new-workshop-testimonials.js',
  benefits: 'data/new-workshop-benefits.js'
}
```

### 4. Add a redirect shim
Create `new-workshop.html` for backward-compatible URLs:

```html
<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<script>window.location.replace('workshop.html?w=new-workshop');</script>
</head><body></body></html>
```

### 5. Update Workshop Index Configuration
Two edits are required: **index.html** and **workshops-index-config.js**.

**5a. Add the config script to index.html** before `workshops-index-config.js` (so the named global is available when that file runs):

```html
<script src="config/new-workshop-config.js"></script>
<script src="config/workshops-index-config.js"></script>  <!-- already there -->
```

**5b. Add the workshop entry to `config/workshops-index-config.js`**. The `title`, `subtitle`, and `date` fields are derived automatically from the named global you set in Step 1 via the `_field()` helper — do not duplicate them here. Only index-specific fields (`description`, `features`, `price`, `ctaText`, `ctaUrl`, `colorScheme`, `status`) belong in this entry:

```javascript
{
    id: 'new-workshop',
    slug: 'new-workshop',
    // title/subtitle/date come from window.WORKSHOP_CONFIG_NEW_WORKSHOP via _field() —
    // they are the single source of truth in the per-workshop config.
    title: _field(window.WORKSHOP_CONFIG_NEW_WORKSHOP, 'title', 'Fallback Title'),
    subtitle: _field(window.WORKSHOP_CONFIG_NEW_WORKSHOP, 'subtitle', 'Fallback subtitle.'),
    date: _field(window.WORKSHOP_CONFIG_NEW_WORKSHOP, 'date', 'Coming Soon'),
    // Index-specific summary fields (not in the per-workshop config shape).
    description: 'One-sentence description for the index card.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    duration: '90 minutes',
    format: 'Small group (max 20 participants)',
    price: 'From €10',
    ctaText: 'Learn More',
    ctaUrl: 'workshop.html?w=new-workshop',
    colorScheme: 'new-workshop',
    status: 'coming-soon'
}
```

### 6. Add CSS Classes (Optional)
If you want custom styling for your workshop, add CSS classes in `css/workshop-index.css`:

```css
.workshop-card.new-workshop::before {
    background: linear-gradient(90deg, #your-color1, #your-color2);
}

.workshop-cta .cta-button.new-workshop {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

## Workshop Status

Each workshop can have one of two statuses:
- `'active'` - Workshop is available and can be booked
- `'coming-soon'` - Workshop is planned but not yet available

## Color Schemes

Each workshop has a unique color scheme:
- `virtual-communication` - Blue gradient
- `personal-branding` - Red/Orange gradient
- `digital-leadership` - Green gradient

## File Naming Convention

- Workshop pages: `workshop-name.html`
- Configuration files: `config/workshop-name-config.js`
- Benefits data: `data/workshop-name-benefits.js`
- Testimonials data: `data/workshop-name-testimonials.js`

## Maintenance

To update workshop content:
1. Edit the appropriate configuration file for workshop details
2. Edit the appropriate data files for benefits and testimonials
3. Update the workshop index configuration if needed
4. All changes will be reflected automatically on the website

## Current Workshops

1. **Virtual Communication** - Active
   - Focus: Mastering virtual meetings and online communication
   - Status: Available for booking

2. **Personal Branding** - Coming soon
   - Focus: Building authentic personal brands in the digital age
   - Status: Coming soon (set `status: 'coming-soon'` in `config/workshops-index-config.js`)

3. **Digital Leadership** - Coming soon
   - Focus: Leading teams effectively in virtual environments
   - Status: Coming soon (set `status: 'coming-soon'` in `config/workshops-index-config.js`)