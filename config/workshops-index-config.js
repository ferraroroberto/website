// Workshops Index Configuration
// Centralized configuration for all available workshops.
//
// Title, subtitle, and date are derived from the per-workshop config globals
// (loaded before this file in index.html via workshop-base.js and the three
// per-workshop configs). This makes those fields a single source of truth:
// editing config/workshop-config.js (or its siblings) automatically updates
// what the index card shows, with no second copy to drift.
//
// Fields that are index-specific summaries with no direct equivalent in the
// per-workshop config shape (description, features, price, ctaText, etc.)
// remain here.

// Derive a field from a per-workshop config global; fall back to the default
// if the config global isn't available (e.g. standalone Node.js requires).
function _field(config, key, fallback) {
    return (config && config[key] !== undefined) ? config[key] : fallback;
}

const WORKSHOPS_INDEX_CONFIG = {
    // Available workshops
    workshops: [
        {
            id: 'virtual-communication',
            slug: 'virtual-communication',
            // Derived from config/workshop-config.js — single source of truth.
            title: _field(window.WORKSHOP_CONFIG_VIRTUAL_COMMUNICATION, 'title',
                'Master Virtual Meetings: From Boring to Brilliant & Fun'),
            subtitle: _field(window.WORKSHOP_CONFIG_VIRTUAL_COMMUNICATION, 'subtitle',
                'Transform your online meetings and make every interaction count!'),
            date: _field(window.WORKSHOP_CONFIG_VIRTUAL_COMMUNICATION, 'date',
                'December 9th 16:00 CET'),
            // Index-specific summary fields (not in per-workshop config shape).
            description: 'Learn to communicate effectively in virtual settings with practical tools you can use right away. Master the art of engaging online presentations and meetings.',
            features: [
                'Memorable first impressions in virtual settings',
                'Engaging communication techniques',
                'Technical setup optimization',
                'Interactive learning experience'
            ],
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'workshop.html?w=virtual-communication',
            colorScheme: 'virtual-communication',
            status: 'active'
        },
        {
            id: 'personal-branding',
            slug: 'personal-branding',
            // Derived from config/personal-branding-config.js — single source of truth.
            title: _field(window.WORKSHOP_CONFIG_PERSONAL_BRANDING, 'title',
                'Build Your Personal Brand: Stand Out in the Digital Age'),
            subtitle: _field(window.WORKSHOP_CONFIG_PERSONAL_BRANDING, 'subtitle',
                'Create an authentic and compelling personal brand that opens doors!'),
            date: _field(window.WORKSHOP_CONFIG_PERSONAL_BRANDING, 'date', 'Coming Soon'),
            // Index-specific summary fields.
            description: 'Discover how to build a powerful personal brand that authentically represents you and helps you achieve your professional goals in today\'s digital landscape.',
            features: [
                'Define your unique value proposition',
                'Create compelling online presence',
                'Build authentic connections',
                'Strategic content planning'
            ],
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'workshop.html?w=personal-branding',
            colorScheme: 'personal-branding',
            status: 'coming-soon'
        },
        {
            id: 'digital-leadership',
            slug: 'digital-leadership',
            // Derived from config/digital-leadership-config.js — single source of truth.
            title: _field(window.WORKSHOP_CONFIG_DIGITAL_LEADERSHIP, 'title',
                'Digital Leadership: Lead with Impact in the Virtual World'),
            subtitle: _field(window.WORKSHOP_CONFIG_DIGITAL_LEADERSHIP, 'subtitle',
                'Master the skills to lead teams and organizations in the digital era!'),
            date: _field(window.WORKSHOP_CONFIG_DIGITAL_LEADERSHIP, 'date', 'Coming Soon'),
            // Index-specific summary fields.
            description: 'Develop the essential leadership skills needed to inspire, motivate, and guide teams effectively in virtual and hybrid work environments.',
            features: [
                'Virtual team management strategies',
                'Digital communication leadership',
                'Remote collaboration tools',
                'Building trust in digital spaces'
            ],
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'workshop.html?w=digital-leadership',
            colorScheme: 'digital-leadership',
            status: 'coming-soon'
        }
    ],

    // Page metadata
    meta: {
        title: 'Professional Workshops - Roberto Ferraro',
        description: 'Transform your professional skills with Roberto Ferraro\'s interactive workshops. Master virtual communication, personal branding, and digital leadership.',
        ogTitle: 'Professional Workshops - Roberto Ferraro',
        ogDescription: 'Interactive workshops to enhance your virtual communication, personal branding, and digital leadership skills.',
        ogType: 'website'
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WORKSHOPS_INDEX_CONFIG };
}

// Make available globally for inline use
window.WORKSHOPS_INDEX_CONFIG = WORKSHOPS_INDEX_CONFIG;
