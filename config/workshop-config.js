// Virtual Communication Workshop Configuration
// Only the values that differ from config/workshop-base.js are listed here.

const WORKSHOP_CONFIG = createWorkshopConfig({
    // Event Details
    eventId: 'neemuhqj',
    eventUrl: 'https://luma.com/neemuhqj',

    // UTM campaign (source/medium come from the base)
    utmParams: {
        campaign: 'virtual-meetings-workshop'
    },

    // Workshop Information
    title: 'Master Virtual Meetings: From Boring to Brilliant & Fun',
    subtitle: 'Transform your online meetings and make every interaction count!',
    date: 'December 9th 16:00 CET',

    // Intro paragraphs (rendered as separate <p> blocks, may contain markup)
    intro: [
        'Virtual meetings can be <strong>exhausting</strong>. You know the feeling: wondering if people are paying attention, struggling to sound confident through the screen, or just wishing you could connect better in those tiny Zoom boxes <span class="emoji">😩</span>',
        '<strong>I\'ve been there too.</strong>',
        'Since 2020, I\'ve spent over <strong>5,000 hours in virtual meetings</strong>. Along the way, I\'ve learned that being effective online is about so much more than just having a great microphone or camera, and I LOVE a good tech setup <span class="emoji">🤖</span>',
        'In this workshop, I\'ll share how to make virtual meetings <strong> effective, engaging, and fun!</strong>'
    ],

    // Closing call-to-action block
    finalCta: {
        heading: 'Ready to Transform Your Virtual Presence?',
        text: 'Join me and discover how to make every virtual interaction count. <span class="emoji">🚀</span>'
    },

    // Video
    videoId: 'ojPvNyMOFZg',
    videoUrl: 'https://www.youtube.com/embed/ojPvNyMOFZg',

    // Pricing — base tiers, with workshop-specific recording/coaching extras
    pricing: {
        recording: {
            features: [
                'Everything in Access to Live Session',
                'Become a workshop patron',
                'Session recording',
                'Action guide with key highlights'
            ]
        },
        coaching: {
            features: [
                'Everything in Recording package',
                '45 minutes personal coaching session',
                'Personalized feedback'
            ]
        }
    },

    // SEO
    meta: {
        title: 'Master Virtual Meetings Workshop - Roberto Ferraro',
        description: 'Transform your online presence and make every virtual interaction count. Join Roberto Ferraro\'s workshop to master virtual communication.',
        ogTitle: 'Master Virtual Meetings: From Boring to Brilliant - Roberto Ferraro',
        ogDescription: 'Learn to communicate effectively in virtual settings with practical tools you can use right away.',
        ogType: 'website',
        ogUrl: 'https://www.robertoferraro.net/virtual-communication',
        ogImage: 'https://www.robertoferraro.net/images/virtual-communication-preview.jpg',
        twitterCard: 'summary_large_image'
    }
});

// Make available globally for inline use
if (typeof window !== 'undefined') {
    window.WORKSHOP_CONFIG = WORKSHOP_CONFIG;
    // Named export for the workshop index (single source of truth for shared fields).
    window.WORKSHOP_CONFIG_VIRTUAL_COMMUNICATION = WORKSHOP_CONFIG;
}
