// Personal Branding Workshop Configuration
// Only the values that differ from config/workshop-base.js are listed here.

const WORKSHOP_CONFIG = createWorkshopConfig({
    // Event Details
    eventId: 'personal-branding-demo',
    eventUrl: 'https://lu.ma/personal-branding-demo',

    // UTM campaign (source/medium come from the base)
    utmParams: {
        campaign: 'personal-branding-workshop'
    },

    // Workshop Information
    title: 'Build Your Personal Brand: Stand Out in the Digital Age',
    subtitle: 'Create an authentic and compelling personal brand that opens doors!',
    date: 'Coming Soon',

    // Intro paragraphs (rendered as separate <p> blocks, may contain markup)
    intro: [
        'Building a personal brand can feel <strong>overwhelming</strong>. You know the struggle: wondering what to post, feeling like everyone else has it figured out, or just wishing you could authentically represent yourself online <span class="emoji">😰</span>',
        '<strong>I\'ve been there too.</strong>',
        'Over the past decade, I\'ve helped hundreds of professionals build authentic personal brands that <strong>open doors and create opportunities</strong>. I\'ve learned that personal branding isn\'t about being someone you\'re not - it\'s about being the best version of yourself <span class="emoji">✨</span>',
        'In this workshop, I\'ll share how to build a personal brand that\'s <strong>authentic, compelling, and effective!</strong>'
    ],

    // Closing call-to-action block
    finalCta: {
        heading: 'Ready to Build Your Authentic Personal Brand?',
        text: 'Join me and discover how to stand out authentically in the digital world. <span class="emoji">🚀</span>'
    },

    // Video
    videoId: 'demo-video-id',
    videoUrl: 'https://www.youtube.com/embed/demo-video-id',

    // Pricing — base tiers, with workshop-specific recording/coaching extras
    pricing: {
        recording: {
            features: [
                'Everything in Access to Live Session',
                'Become a workshop patron',
                'Session recording',
                'Personal brand action guide'
            ]
        },
        coaching: {
            features: [
                'Everything in Recording package',
                '45 minutes personal coaching session',
                'Personalized brand strategy'
            ]
        }
    },

    // SEO
    meta: {
        title: 'Build Your Personal Brand Workshop - Roberto Ferraro',
        description: 'Create an authentic and compelling personal brand that opens doors. Join Roberto Ferraro\'s workshop to master personal branding in the digital age.',
        ogTitle: 'Build Your Personal Brand: Stand Out in the Digital Age - Roberto Ferraro',
        ogDescription: 'Discover how to build a powerful personal brand that authentically represents you and helps you achieve your professional goals.',
        ogType: 'website',
        ogUrl: 'https://www.robertoferraro.net/personal-branding',
        ogImage: 'https://www.robertoferraro.net/images/personal-branding-preview.jpg',
        twitterCard: 'summary_large_image'
    }
});

// Make available globally for inline use
if (typeof window !== 'undefined') {
    window.WORKSHOP_CONFIG = WORKSHOP_CONFIG;
    // Named export for the workshop index (single source of truth for shared fields).
    window.WORKSHOP_CONFIG_PERSONAL_BRANDING = WORKSHOP_CONFIG;
}
