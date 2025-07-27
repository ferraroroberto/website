# Master Virtual Meetings Workshop - Landing Page

## Overview

A modern, **data-driven** landing page for Roberto Ferraro's "Master Virtual Meetings: From Boring to Brilliant" workshop. Built with clean separation of concerns and dynamic content population from modular data files, following web development best practices.

## Live Page

🌐 **Live URL**: https://www.robertoferraro.net/virtual-communication-workshop

## Project Structure

```
website/
├── index.html                 # Main HTML file (minimal structure)
├── css/
│   └── styles.css            # All CSS styles (modularly organized)
├── js/
│   └── main.js               # Dynamic content population
├── config/
│   └── workshop-config.js    # Workshop configuration (dates, prices, etc.)
├── data/
│   ├── testimonials.js       # Testimonials data
│   ├── benefits.js           # Benefits section content
│   └── illustrations.js      # Image URLs and alt text
├── illustrations/            # Local illustration assets
├── images/                   # Local image assets
├── package.json              # Project documentation
└── README.md                 # This file
```

## Architecture

### Data-Driven Design
- **HTML**: Minimal structure with placeholder containers
- **JavaScript**: Dynamically populates content from data files
- **CSS**: Styling and layout (external file)
- **Data Files**: Content separated by type for easy maintenance

### Dynamic Content Population
- **Workshop Details**: Title, subtitle, dates, pricing from config
- **Testimonials**: Generated from testimonials data file
- **Benefits**: Populated from benefits data file
- **Illustrations**: Images loaded from illustrations data file
- **Pricing Cards**: Dynamically generated from pricing config

### Modular Design
- **Configuration**: Centralized workshop settings
- **Data Files**: Content separated by type (testimonials, benefits, etc.)
- **CSS Organization**: Logical sections with clear comments
- **JavaScript**: Dynamic content population with error handling

## Key Features

### Design System
- **Color Scheme**: Black/white with yellow accent (#FFCC00)
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

### Core Files

#### `index.html`
- Minimal HTML structure with placeholder containers
- Semantic markup with IDs for JavaScript targeting
- External CSS and JS references
- SEO meta tags

#### `css/styles.css`
Organized into logical sections:
- Reset & Base Styles
- Layout Components
- Illustrations Section
- Video Section
- Benefits Section
- Testimonials Section
- Pricing Section
- Buttons & CTAs
- Responsive Design

#### `js/main.js`
- **Dynamic Content Population**: Populates HTML from data files
- **Workshop Details**: Updates title, subtitle, dates, pricing
- **Illustrations**: Loads images from data file
- **Benefits**: Generates benefit cards from data
- **Testimonials**: Creates testimonial cards dynamically
- **Pricing**: Generates pricing cards from config
- **Error Handling**: Graceful fallbacks if data files fail to load

### Configuration & Data

#### `config/workshop-config.js`
Centralized configuration including:
- Event details (ID, URL)
- Workshop information (title, date, duration)
- Pricing structure with features
- Video settings
- SEO meta data

#### `data/testimonials.js`
- Structured testimonial data
- Profile photos, names, handles
- Quote text and author attribution

#### `data/benefits.js`
- Benefits section content
- Titles and descriptions

#### `data/illustrations.js`
- Image URLs and alt text
- Organized by section (top row, bottom row, group photo)

## Maintenance Guide

### Updating Workshop Details
1. Edit `config/workshop-config.js`
2. Update event ID, dates, pricing
3. Modify workshop information as needed
4. **No HTML changes required!**

### Adding/Editing Testimonials
1. Edit `data/testimonials.js`
2. Add new testimonial objects
3. Include photo URL, name, handle, and quote
4. **Content updates automatically!**

### Modifying Benefits
1. Edit `data/benefits.js`
2. Update titles and descriptions
3. Add or remove benefit items
4. **Changes reflect immediately!**

### Changing Images
1. Update URLs in `data/illustrations.js`
2. Replace local files in `illustrations/` or `images/`
3. Update alt text for accessibility
4. **Images update dynamically!**

### Styling Changes
1. Edit `css/styles.css`
2. Follow the organized section structure
3. Test responsive behavior

## Development Best Practices

### JavaScript Principles
- **Dynamic Content**: All content populated from data files
- **Error Handling**: Graceful fallbacks for missing data
- **Modular Functions**: Separate functions for each content type
- **No jQuery Dependencies**: Vanilla JavaScript only
- **Progressive Enhancement**: Works even if JavaScript fails

### CSS Organization
- Logical section grouping
- Clear comments for each section
- Mobile-first responsive design
- Consistent naming conventions

### HTML Standards
- Semantic markup with placeholder containers
- Accessibility considerations
- SEO optimization
- Clean, minimal structure

## Performance Considerations

### Optimization
- External CSS for caching
- Minimal JavaScript with efficient DOM manipulation
- Optimized images (CDN hosted)
- Efficient font loading

### Loading Strategy
- Critical CSS inlined (if needed)
- Non-blocking JavaScript
- Lazy loading for images
- Progressive enhancement

## Browser Support

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **CSS Grid**: IE11+ support
- **Flexbox**: Broad support
- **JavaScript**: ES6+ features with fallbacks

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
    src="https://www.robertoferraro.net/virtual-communication-workshop" 
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
        src="https://www.robertoferraro.net/virtual-communication-workshop"
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
    src="https://virtualcommunication.robertoferraro.net/index.html"
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

#### Step 2: Send iframe height from the Netlify page
Add this script before `</body>` in the Netlify-hosted page (`index.html`):

```html
<script>
  function sendHeight() {
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    parent.postMessage({ type: 'setHeight', height: height }, '*');
  }

  window.addEventListener('load', sendHeight);
  window.addEventListener('resize', sendHeight);
  setInterval(sendHeight, 1000); // fallback for dynamic content changes
</script>
```

**Features:**
- Measures the height of the entire page and sends it to the parent site
- Uses `postMessage` for secure cross-origin communication
- `setInterval` ensures height stays updated even with dynamic content changes

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

### Code Style
- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Keep functions small and focused

### File Organization
- Maintain modular structure
- Update documentation when adding files
- Follow established patterns
- Test changes across devices

### Data Management
- Keep data files clean and organized
- Use consistent data structures
- Validate data before committing
- Test dynamic population

---

*Last Updated: January 2025*
*For technical questions, contact the development team.* 