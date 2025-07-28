// Digital Leadership Workshop Configuration
// Centralized configuration for easy maintenance

const WORKSHOP_CONFIG = {
    // Event Details
    eventId: 'digital-leadership-demo',
    eventUrl: 'https://lu.ma/digital-leadership-demo',
    
    // UTM Parameters for tracking
    utmParams: {
        source: 'landing',
        medium: 'website',
        campaign: 'digital-leadership-workshop'
    },
    
    // Workshop Information
    title: 'Digital Leadership: Lead with Impact in the Virtual World',
    subtitle: 'Master the skills to lead teams and organizations in the digital era!',
    date: 'Coming Soon',
    duration: '90 minutes of interactive learning',
    format: 'Small group (max 20 participants)',
    
    // Video
    videoId: 'demo-video-id',
    videoUrl: 'https://www.youtube.com/embed/demo-video-id',
    
    // Pricing
    pricing: {
        basic: {
            title: 'Attend The Workshop',
            price: 10,
            currency: '€',
            features: [
                'Access to Live Session',
                'Pay a symbolic commitment price'
            ],
            buttonText: 'Get Your Ticket'
        },
        recording: {
            title: 'With Recording',
            price: 19,
            currency: '€',
            featured: true,
            features: [
                'Everything in Access to Live Session',
                'Become a workshop patron',
                'Session recording',
                'Leadership action guide'
            ],
            buttonText: 'Plus Recording And Resources'
        },
        coaching: {
            title: 'With Coaching',
            price: 150,
            currency: '€',
            features: [
                'Everything in Recording package',
                '45 minutes personal coaching session',
                'Personalized leadership strategy'
            ],
            buttonText: 'Plus 1:1 Coaching'
        }
    },
    
    // External Resources
    favicon: 'https://www.robertoferraro.net/favicon.ico',
    
    // SEO
    meta: {
        title: 'Digital Leadership Workshop - Roberto Ferraro',
        description: 'Master the skills to lead teams and organizations in the digital era. Join Roberto Ferraro\'s workshop to become an effective digital leader.',
        ogTitle: 'Digital Leadership: Lead with Impact in the Virtual World - Roberto Ferraro',
        ogDescription: 'Develop the essential leadership skills needed to inspire, motivate, and guide teams effectively in virtual and hybrid work environments.',
        ogType: 'website'
    }
};

// Helper function to build Luma URL with UTM parameters
function buildLumaUrl() {
    const baseUrl = WORKSHOP_CONFIG.eventUrl;
    const params = new URLSearchParams();
    
    // Add UTM parameters
    params.append('utm_source', WORKSHOP_CONFIG.utmParams.source);
    params.append('utm_medium', WORKSHOP_CONFIG.utmParams.medium);
    params.append('utm_campaign', WORKSHOP_CONFIG.utmParams.campaign);
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WORKSHOP_CONFIG, buildLumaUrl };
}

// Make available globally for inline use
window.WORKSHOP_CONFIG = WORKSHOP_CONFIG;
window.buildLumaUrl = buildLumaUrl;