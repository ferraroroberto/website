# Workshop Website Structure

This website now supports multiple workshops with a modular structure that makes it easy to add new workshops and maintain existing ones.

## Structure Overview

### Main Files
- `index.html` - Workshop repository page (main landing page)
- `virtual-communication.html` - Virtual Communication workshop page
- `personal-branding.html` - Personal Branding workshop page
- `digital-leadership.html` - Digital Leadership workshop page

### Configuration Files
- `config/workshops-index-config.js` - Configuration for the workshop index page
- `config/workshop-config.js` - Configuration for Virtual Communication workshop
- `config/personal-branding-config.js` - Configuration for Personal Branding workshop
- `config/digital-leadership-config.js` - Configuration for Digital Leadership workshop

### Data Files
- `data/benefits.js` - Benefits for Virtual Communication workshop
- `data/testimonials.js` - Testimonials for Virtual Communication workshop
- `data/personal-branding-benefits.js` - Benefits for Personal Branding workshop
- `data/personal-branding-testimonials.js` - Testimonials for Personal Branding workshop
- `data/digital-leadership-benefits.js` - Benefits for Digital Leadership workshop
- `data/digital-leadership-testimonials.js` - Testimonials for Digital Leadership workshop
- `data/illustrations.js` - Shared illustrations (used across all workshops)

### JavaScript Files
- `js/workshop-index.js` - JavaScript for the workshop index page
- `js/main.js` - JavaScript for individual workshop pages

### CSS Files
- `css/styles.css` - Main styles (shared across all pages)
- `css/workshop-index.css` - Styles for the workshop index page

## How to Add a New Workshop

### 1. Create the Workshop Page
Create a new HTML file (e.g., `new-workshop.html`) based on the structure of existing workshop pages.

### 2. Create Configuration File
Create `config/new-workshop-config.js` with the workshop-specific configuration:

```javascript
const WORKSHOP_CONFIG = {
    eventId: 'your-event-id',
    eventUrl: 'https://lu.ma/your-event-id',
    utmParams: {
        source: 'landing',
        medium: 'website',
        campaign: 'new-workshop'
    },
    title: 'Your Workshop Title',
    subtitle: 'Your workshop subtitle',
    date: 'Your workshop date',
    duration: '90 minutes of interactive learning',
    format: 'Small group (max 20 participants)',
    videoId: 'your-video-id',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    pricing: {
        // Define your pricing tiers
    },
    meta: {
        // SEO metadata
    }
};
```

### 3. Create Data Files
Create the benefits and testimonials files:
- `data/new-workshop-benefits.js`
- `data/new-workshop-testimonials.js`

### 4. Update Workshop Index Configuration
Add your workshop to `config/workshops-index-config.js`:

```javascript
{
    id: 'new-workshop',
    slug: 'new-workshop',
    title: 'Your Workshop Title',
    subtitle: 'Your workshop subtitle',
    description: 'Your workshop description',
    features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4'
    ],
    date: 'Your workshop date',
    duration: '90 minutes',
    format: 'Small group (max 20 participants)',
    price: 'From €10',
    ctaText: 'Learn More',
    ctaUrl: 'new-workshop.html',
    colorScheme: 'new-workshop',
    status: 'active' // or 'coming-soon'
}
```

### 5. Add CSS Classes (Optional)
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

2. **Personal Branding** - Active
   - Focus: Building authentic personal brands in the digital age
   - Status: Available for booking

3. **Digital Leadership** - Active
   - Focus: Leading teams effectively in virtual environments
   - Status: Available for booking