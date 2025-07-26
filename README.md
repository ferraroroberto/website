# Master Virtual Meetings Workshop - Landing Page Documentation

## Overview

This HTML file contains the complete landing page for Roberto Ferraro's "Master Virtual Meetings: From Boring to Brilliant" workshop. The page is designed as a conversion-focused landing page with testimonials, pricing, and registration functionality.

## Live Page

🌐 **Live URL**: https://www.robertoferraro.net/virtual-communication-workshop

## File Structure

- **File**: `workshop-landing-page.html`
- **Type**: Complete HTML document with embedded CSS
- **Framework**: Vanilla HTML/CSS with Luma Events integration
- **Responsive**: Yes, mobile-optimized

## Page Sections

### 1. Header Section
- Workshop title: "Master Virtual Meetings: From Boring to Brilliant (and Fun)"
- Subtitle and value proposition
- Introductory text about Roberto's experience (5,000+ hours in virtual meetings)

### 2. Video Section
- Embedded YouTube video (ID: `ojPvNyMOFZg`)
- Responsive 16:9 aspect ratio container
- Workshop teaser content

### 3. Benefits Section ("What's in it for you?")
Four key benefit cards:
- **Memorable First Impressions**: Making stronger impressions when joining calls
- **Engaging Communication**: Using voice, gestures, and presence effectively
- **Avoid Common Pitfalls**: Preventing common mistakes in virtual meetings
- **Technical Mastery**: Proper technical setup guidance

### 4. Testimonials Section
9 customer testimonials with:
- Profile photos
- Names and handles
- Detailed feedback quotes
- Professional credentials

### 5. Pricing Section
Three pricing tiers:
- **Attend The Workshop**: €10 (Live session access)
- **With Recording**: €19 (Most popular - includes recording + action guide)
- **With Coaching**: €150 (Includes 45min personal coaching session)

### 6. Workshop Details
- **Date**: September 2nd 16:00 CET
- **Duration**: 90 minutes interactive
- **Format**: Small group (max 20 participants)

### 7. Final CTA Section
- Call-to-action for registration
- Emphasis on limited spots

## Key Features

### Design Elements
- **Color Scheme**: Primarily black/white with yellow accent (#FFCC00)
- **Typography**: Poppins font for headers, system fonts for body
- **Layout**: CSS Grid for responsive sections
- **Mobile-First**: Responsive design with mobile breakpoints

### Interactive Elements
- Hover effects on pricing cards
- YouTube video embed
- Luma Events integration for registration

### Technical Integration
- **Luma Events**: Complete checkout integration
- **Event ID**: `evt-nXszqLJju39H8K0`
- **SEO**: Meta tags for social sharing
- **Favicon**: Links to robertoferraro.net favicon

## Embed Code

To embed this workshop landing page in another website, use this iframe code:

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

### Responsive Embed Code

For a fully responsive embed that maintains aspect ratio:

```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe 
        src="https://www.robertoferraro.net/virtual-communication-workshop"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        title="Master Virtual Meetings Workshop">
    </iframe>
</div>
```

### Embed with Custom Height

For blogs or content pages where you want to control the height:

```html
<iframe 
    src="https://www.robertoferraro.net/virtual-communication-workshop" 
    width="100%" 
    height="1200" 
    style="border: none; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
    title="Master Virtual Meetings Workshop">
</iframe>
```

## CSS Architecture

### Layout System
- **Grid**: CSS Grid for main layout sections
- **Flexbox**: Used for card layouts and alignment
- **Container**: Max-width 1200px with auto margins

### Responsive Breakpoints
- **Mobile**: 768px and below
- **Tablet/Desktop**: Above 768px

### Key CSS Classes
- `.workshop-section`: Main container
- `.benefits-grid`: Grid layout for benefit cards
- `.pricing-grid`: Grid layout for pricing cards
- `.testimonials-grid`: Grid layout for testimonials
- `.cta-button`: Primary action buttons

## JavaScript Dependencies

### Luma Events Integration
```html
<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
```

This script enables:
- Checkout functionality
- Event registration
- Payment processing through Luma platform

## Performance Considerations

- **Font Loading**: Google Fonts with display=swap
- **Image Optimization**: External images from Squarespace CDN
- **Video**: YouTube embed (lazy-loaded by default)
- **CSS**: Embedded for faster initial load
- **File Size**: Single file approach for simplicity

## SEO Features

- Semantic HTML structure
- Meta descriptions and Open Graph tags
- Structured headings (H1, H2, H3)
- Alt text for images
- Descriptive title tag

## Maintenance Notes

- Update workshop dates in the "Workshop Details" section
- Testimonial images are hosted on Squarespace CDN
- Luma event ID needs to be updated for new workshops
- Pricing can be modified in the pricing section
- YouTube video ID can be changed in the video container

## Browser Compatibility

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **CSS Grid**: IE11+ support
- **Flexbox**: Broad support
- **Responsive**: Mobile-first approach ensures compatibility

---

*Last Updated: January 2025*
*For technical questions about this documentation, contact the development team.* 