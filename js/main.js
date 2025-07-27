// Main JavaScript file for the workshop landing page
// Populates HTML with data from configuration and data files

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with data
    initializePage();
    
    // Add smooth scrolling for anchor links (if any are added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Track CTA button clicks for analytics (if needed)
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('CTA button clicked:', this.textContent.trim());
        });
    });
});

function initializePage() {
    // Populate workshop details from config
    populateWorkshopDetails();
    
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
    
    console.log('Workshop landing page initialized successfully');
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
        
        // Update all CTA buttons with the correct event URL
        document.querySelectorAll('.cta-button').forEach(button => {
            button.href = config.eventUrl;
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
        });
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
            
            pricingContainer.innerHTML = Object.values(pricing).map(plan => `
                <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                    ${plan.featured ? '<span class="featured-badge">Most Popular</span>' : ''}
                    <h3>${plan.title}</h3>
                    <div class="price"><span class="price-currency">${plan.currency}</span>${plan.price}</div>
                    <ul class="pricing-features">
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <a
                      href="${config.eventUrl}"
                      class="cta-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${plan.buttonText}
                    </a>
                </div>
            `).join('');
        }
    }
}

function populateVideo() {
    if (window.WORKSHOP_CONFIG) {
        const videoElement = document.getElementById('workshop-video');
        if (videoElement) {
            videoElement.src = window.WORKSHOP_CONFIG.videoUrl;
        }
    }
} 