// Main JavaScript file for the workshop landing page
// Populates HTML with data from configuration and data files

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with data
    initializePage();
});

function initializePage() {
    // Populate document <head> (title + meta) from config
    populateMeta();

    // Populate workshop details from config
    populateWorkshopDetails();

    // Populate intro paragraphs and closing CTA copy from config
    populateCopy();

    // Populate illustrations
    populateIllustrations();
    
    // Populate benefits
    populateBenefits();
    
    // Populate testimonials
    populateTestimonials();
    
    // Populate pricing
    populatePricing();
    
    // Populate video
    populateVideo();
}

function populateWorkshopDetails() {
    if (window.WORKSHOP_CONFIG) {
        const config = window.WORKSHOP_CONFIG;
        
        // Update workshop title and subtitle
        const titleElement = document.getElementById('workshop-title');
        const subtitleElement = document.getElementById('workshop-subtitle');
        
        if (titleElement) titleElement.textContent = config.title;
        if (subtitleElement) subtitleElement.textContent = config.subtitle;
        
        // Update workshop details
        const dateElement = document.getElementById('workshop-date');
        const durationElement = document.getElementById('workshop-duration');
        const formatElement = document.getElementById('workshop-format');
        
        if (dateElement) dateElement.textContent = config.date;
        if (durationElement) durationElement.textContent = config.duration;
        if (formatElement) formatElement.textContent = config.format;
        
        updateCtaButtons(config);
    }
}

function populateMeta() {
    const config = window.WORKSHOP_CONFIG;
    if (!config) return;

    // Document title
    if (config.meta && config.meta.title) {
        document.title = config.meta.title;
    }

    // Favicon
    if (config.favicon) {
        setLinkTag('icon', config.favicon);
    }

    if (!config.meta) return;
    const meta = config.meta;

    // Standard + Open Graph + Twitter meta tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.ogTitle);
    setMetaTag('property', 'og:description', meta.ogDescription);
    setMetaTag('property', 'og:type', meta.ogType);
    setMetaTag('property', 'og:url', meta.ogUrl);
    setMetaTag('property', 'og:image', meta.ogImage);
    setMetaTag('name', 'twitter:card', meta.twitterCard);
    setMetaTag('name', 'twitter:title', meta.twitterTitle || meta.ogTitle);
    setMetaTag('name', 'twitter:description', meta.twitterDescription || meta.ogDescription);
    setMetaTag('name', 'twitter:image', meta.twitterImage || meta.ogImage);
}

// Create or update a <meta> tag identified by attr (`name` or `property`).
function setMetaTag(attr, key, content) {
    if (content === undefined || content === null) return;
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

// Create or update a <link rel="..."> tag.
function setLinkTag(rel, href) {
    if (!href) return;
    let tag = document.head.querySelector(`link[rel="${rel}"]`);
    if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        document.head.appendChild(tag);
    }
    tag.setAttribute('href', href);
}

function populateCopy() {
    const config = window.WORKSHOP_CONFIG;
    if (!config) return;

    // Intro paragraphs — rendered with a <br> between blocks to match layout
    const introContainer = document.getElementById('workshop-intro');
    if (introContainer && Array.isArray(config.intro)) {
        introContainer.innerHTML = config.intro
            .map(paragraph => `<p>${paragraph}</p>`)
            .join('\n<br>\n');
    }

    // Closing call-to-action heading + lead text
    if (config.finalCta) {
        const headingEl = document.getElementById('final-cta-heading');
        const textEl = document.getElementById('final-cta-text');
        if (headingEl && config.finalCta.heading) headingEl.textContent = config.finalCta.heading;
        if (textEl && config.finalCta.text) textEl.innerHTML = config.finalCta.text;
    }

    const availabilityEl = document.getElementById('final-cta-availability');
    if (availabilityEl && !isBookingOpen(config)) {
        availabilityEl.textContent = config.comingSoonMessage || 'Registration details will be published here soon.';
    }
}

function populateIllustrations() {
    if (window.ILLUSTRATIONS_DATA) {
        const illustrations = window.ILLUSTRATIONS_DATA;
        
        // Populate top illustrations
        const topContainer = document.getElementById('top-illustrations');
        if (topContainer && illustrations.topRow) {
            topContainer.innerHTML = illustrations.topRow.map(illustration => `
                <div class="illustration-item">
                    <img src="${illustration.url}" alt="${illustration.alt}" class="illustration-image">
                </div>
            `).join('');
        }
        
        // Populate bottom illustrations
        const bottomContainer = document.getElementById('bottom-illustrations');
        if (bottomContainer && illustrations.bottomRow) {
            bottomContainer.innerHTML = illustrations.bottomRow.map(illustration => `
                <div class="illustration-item">
                    <img src="${illustration.url}" alt="${illustration.alt}" class="illustration-image">
                </div>
            `).join('');
        }
        
        // Populate group photo
        const groupPhotoElement = document.getElementById('group-photo');
        if (groupPhotoElement && illustrations.groupPhoto) {
            groupPhotoElement.src = illustrations.groupPhoto.url;
            groupPhotoElement.alt = illustrations.groupPhoto.alt;
        }
    }
}

function populateBenefits() {
    if (window.BENEFITS_DATA) {
        const benefitsContainer = document.getElementById('benefits-grid');
        if (benefitsContainer) {
            benefitsContainer.innerHTML = window.BENEFITS_DATA.map(benefit => `
                <div class="benefit-item">
                    <h3>${benefit.title}</h3>
                    <p>${benefit.description}</p>
                </div>
            `).join('');
        }
    }
}

function populateTestimonials() {
    if (window.TESTIMONIALS_DATA) {
        const testimonialsContainer = document.getElementById('testimonials-grid');
        if (testimonialsContainer) {
            testimonialsContainer.innerHTML = window.TESTIMONIALS_DATA.map(testimonial => `
                <div class="testimonial">
                    <div class="testimonial-header">
                        <img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-photo">
                        <div class="testimonial-info">
                            <p class="testimonial-name">${testimonial.name}</p>
                            <p class="testimonial-handle">${testimonial.handle}</p>
                        </div>
                        <div class="testimonial-linkedin"></div>
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <p class="testimonial-author">— ${testimonial.author}</p>
                </div>
            `).join('');
        }
    }
}

function populatePricing() {
    if (window.WORKSHOP_CONFIG && window.WORKSHOP_CONFIG.pricing) {
        const pricingContainer = document.getElementById('pricing-grid');
        if (pricingContainer) {
            const pricing = window.WORKSHOP_CONFIG.pricing;
            const config = window.WORKSHOP_CONFIG;

            if (!isBookingOpen(config)) {
                const pricingTitle = document.querySelector('.pricing-title');
                if (pricingTitle) pricingTitle.textContent = 'Registration Opens Soon';
                pricingContainer.innerHTML = `
                <div class="coming-soon-notice">
                    <h3>Coming Soon</h3>
                    <p>${config.comingSoonMessage || 'This workshop is being prepared. Check back soon for registration details.'}</p>
                </div>
            `;
                updateCtaButtons(config);
                return;
            }
            
            pricingContainer.innerHTML = Object.values(pricing).map(plan => `
                <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                    ${plan.featured ? '<span class="featured-badge">Most Popular</span>' : ''}
                    <h3>${plan.title}</h3>
                    <div class="price"><span class="price-currency">${plan.currency}</span>${plan.price}</div>
                    <ul class="pricing-features">
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a
                      href="${window.buildLumaUrl()}"
                      class="cta-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${plan.buttonText}
                    </a>
                </div>
            `).join('');
            updateCtaButtons(config);
        }
    }
}

function populateVideo() {
    if (window.WORKSHOP_CONFIG) {
        const videoElement = document.getElementById('workshop-video');
        const videoContainer = videoElement ? videoElement.closest('.video-container') : null;
        const videoUrl = window.WORKSHOP_CONFIG.videoUrl;
        if (videoElement && videoUrl) {
            videoElement.src = videoUrl;
            if (videoContainer) videoContainer.hidden = false;
        } else if (videoContainer) {
            videoContainer.hidden = true;
        }
    }
}

function isBookingOpen(config) {
    return config && config.status !== 'coming-soon' && Boolean(window.buildLumaUrl(config));
}

function updateCtaButtons(config) {
    const bookingUrl = window.buildLumaUrl(config);
    const bookingOpen = isBookingOpen(config);

    document.querySelectorAll('.cta-button').forEach(button => {
        if (bookingOpen) {
            button.href = bookingUrl;
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            button.removeAttribute('aria-disabled');
            button.classList.remove('is-disabled');
            return;
        }

        button.removeAttribute('href');
        button.removeAttribute('target');
        button.removeAttribute('rel');
        button.setAttribute('aria-disabled', 'true');
        button.classList.add('is-disabled');
        button.textContent = 'Coming Soon';
    });
}
