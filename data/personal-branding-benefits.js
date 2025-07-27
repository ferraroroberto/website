// Personal Branding Benefits Data
// Centralized benefits content for easy maintenance

const BENEFITS_DATA = [
    {
        title: 'Define Your Unique Value',
        description: 'Learn how to identify and articulate what makes you uniquely valuable in your field.'
    },
    {
        title: 'Create Authentic Content',
        description: 'Discover how to create content that authentically represents you and resonates with your audience.'
    },
    {
        title: 'Build Meaningful Connections',
        description: 'Learn strategies to build genuine relationships that support your professional growth.'
    },
    {
        title: 'Strategic Online Presence',
        description: 'And yes, we\'ll cover the technical aspects of building a compelling online presence, too!'
    }
];

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BENEFITS_DATA;
}

// Make available globally for inline use
window.BENEFITS_DATA = BENEFITS_DATA;