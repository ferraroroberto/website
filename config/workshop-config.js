// Workshop Configuration
// Centralized configuration for easy maintenance

const WORKSHOP_CONFIG = {
    // Event Details
    eventId: 'ds4s0onl',
    eventUrl: 'https://luma.com/ds4s0onl',
    
    // UTM Parameters for tracking
    utmParams: {
        source: 'landing',
        medium: 'website',
        campaign: 'virtual-meetings-workshop'
    },
    
    // Workshop Information
    title: 'Master Virtual Meetings: From Boring to Brilliant & Fun',
    subtitle: 'Transform your online meetings and make every interaction count!',
    date: 'February 10th 2026 - 16:00 to 17:30 CET',
    duration: '90 minutes of interactive learning',
    format: 'Small group (max 20 participants)',
    
    // Video
    videoId: 'ojPvNyMOFZg',
    videoUrl: 'https://www.youtube.com/embed/ojPvNyMOFZg',
    
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
                'Action guide with key highlights'
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
                'Personalized feedback'
            ],
            buttonText: 'Plus 1:1 Coaching'
        }
    },
    
    // External Resources
    favicon: 'https://www.robertoferraro.net/favicon.ico',
    
    // SEO
    meta: {
        title: 'Master Virtual Meetings Workshop - Roberto Ferraro',
        description: 'Transform your online presence and make every virtual interaction count. Join Roberto Ferraro\'s workshop to master virtual communication.',
        ogTitle: 'Master Virtual Meetings: From Boring to Brilliant - Roberto Ferraro',
        ogDescription: 'Learn to communicate effectively in virtual settings with practical tools you can use right away.',
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