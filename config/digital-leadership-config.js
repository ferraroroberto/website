// Digital Leadership Workshop Configuration
// Only the values that differ from config/workshop-base.js are listed here.

(function () {
const WORKSHOP_CONFIG = createWorkshopConfig({
    // Event Details
    eventId: 'digital-leadership-demo',
    eventUrl: 'https://lu.ma/digital-leadership-demo',

    // UTM campaign (source/medium come from the base)
    utmParams: {
        campaign: 'digital-leadership-workshop'
    },

    // Workshop Information
    title: 'Digital Leadership: Lead with Impact in the Virtual World',
    subtitle: 'Master the skills to lead teams and organizations in the digital era!',
    date: 'Coming Soon',

    // Intro paragraphs (rendered as separate <p> blocks, may contain markup)
    intro: [
        'Leading teams in the digital age can be <strong>challenging</strong>. You know the struggle: trying to maintain team morale through screens, struggling to build trust remotely, or just wishing you could inspire your team as effectively as in person <span class="emoji">😤</span>',
        '<strong>I\'ve been there too.</strong>',
        'Over the years, I\'ve worked with leaders across various industries to develop <strong>effective digital leadership strategies</strong>. I\'ve learned that great leadership in the digital world requires new skills and approaches <span class="emoji">🎯</span>',
        'In this workshop, I\'ll share how to lead teams <strong>effectively, inspirationally, and successfully in the digital era!</strong>'
    ],

    // Closing call-to-action block
    finalCta: {
        heading: 'Ready to Lead with Impact in the Digital Age?',
        text: 'Join me and discover how to inspire and guide teams effectively in the virtual world. <span class="emoji">🚀</span>'
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
                'Leadership action guide'
            ]
        },
        coaching: {
            features: [
                'Everything in Recording package',
                '45 minutes personal coaching session',
                'Personalized leadership strategy'
            ]
        }
    },

    // SEO
    meta: {
        title: 'Digital Leadership Workshop - Roberto Ferraro',
        description: 'Master the skills to lead teams and organizations in the digital era. Join Roberto Ferraro\'s workshop to become an effective digital leader.',
        ogTitle: 'Digital Leadership: Lead with Impact in the Virtual World - Roberto Ferraro',
        ogDescription: 'Develop the essential leadership skills needed to inspire, motivate, and guide teams effectively in virtual and hybrid work environments.',
        ogType: 'website',
        ogUrl: 'https://www.robertoferraro.net/digital-leadership',
        ogImage: 'https://www.robertoferraro.net/images/digital-leadership-preview.jpg',
        twitterCard: 'summary_large_image'
    }
});

// Make available globally for inline use
if (typeof window !== 'undefined') {
    window.WORKSHOP_CONFIG = WORKSHOP_CONFIG;
    // Named export for the workshop index (single source of truth for shared fields).
    window.WORKSHOP_CONFIG_DIGITAL_LEADERSHIP = WORKSHOP_CONFIG;
}
})();
