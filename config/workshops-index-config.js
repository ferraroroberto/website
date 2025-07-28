// Workshops Index Configuration
// Centralized configuration for all available workshops

const WORKSHOPS_INDEX_CONFIG = {
    // Available workshops
    workshops: [
        {
            id: 'virtual-communication',
            slug: 'virtual-communication',
            title: 'Master Virtual Meetings: From Boring to Brilliant & Fun',
            subtitle: 'Transform your online meetings and make every interaction count!',
            description: 'Learn to communicate effectively in virtual settings with practical tools you can use right away. Master the art of engaging online presentations and meetings.',
            features: [
                'Memorable first impressions in virtual settings',
                'Engaging communication techniques',
                'Technical setup optimization',
                'Interactive learning experience'
            ],
            date: 'September 2nd 16:00 CET',
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'virtual-communication.html',
            colorScheme: 'virtual-communication',
            status: 'active'
        },
        {
            id: 'personal-branding',
            slug: 'personal-branding',
            title: 'Build Your Personal Brand: Stand Out in the Digital Age',
            subtitle: 'Create an authentic and compelling personal brand that opens doors!',
            description: 'Discover how to build a powerful personal brand that authentically represents you and helps you achieve your professional goals in today\'s digital landscape.',
            features: [
                'Define your unique value proposition',
                'Create compelling online presence',
                'Build authentic connections',
                'Strategic content planning'
            ],
            date: 'Coming Soon',
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'personal-branding.html',
            colorScheme: 'personal-branding',
            status: 'active'
        },
        {
            id: 'digital-leadership',
            slug: 'digital-leadership',
            title: 'Digital Leadership: Lead with Impact in the Virtual World',
            subtitle: 'Master the skills to lead teams and organizations in the digital era!',
            description: 'Develop the essential leadership skills needed to inspire, motivate, and guide teams effectively in virtual and hybrid work environments.',
            features: [
                'Virtual team management strategies',
                'Digital communication leadership',
                'Remote collaboration tools',
                'Building trust in digital spaces'
            ],
            date: 'Coming Soon',
            duration: '90 minutes',
            format: 'Small group (max 20 participants)',
            price: 'From €10',
            ctaText: 'Learn More',
            ctaUrl: 'digital-leadership.html',
            colorScheme: 'digital-leadership',
            status: 'active'
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

// Helper function to get workshop by ID
function getWorkshopById(id) {
    return WORKSHOPS_INDEX_CONFIG.workshops.find(workshop => workshop.id === id);
}

// Helper function to get workshop by slug
function getWorkshopBySlug(slug) {
    return WORKSHOPS_INDEX_CONFIG.workshops.find(workshop => workshop.slug === slug);
}

// Helper function to get active workshops only
function getActiveWorkshops() {
    return WORKSHOPS_INDEX_CONFIG.workshops.filter(workshop => workshop.status === 'active');
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        WORKSHOPS_INDEX_CONFIG, 
        getWorkshopById, 
        getWorkshopBySlug, 
        getActiveWorkshops 
    };
}

// Make available globally for inline use
window.WORKSHOPS_INDEX_CONFIG = WORKSHOPS_INDEX_CONFIG;
window.getWorkshopById = getWorkshopById;
window.getWorkshopBySlug = getWorkshopBySlug;
window.getActiveWorkshops = getActiveWorkshops;