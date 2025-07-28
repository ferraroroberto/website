// Digital Leadership Benefits Data
// Centralized benefits content for easy maintenance

const BENEFITS_DATA = [
    {
        title: 'Virtual Team Management',
        description: 'Learn effective strategies to manage and motivate teams in remote and hybrid environments.'
    },
    {
        title: 'Digital Communication Leadership',
        description: 'Master the art of communicating vision and goals effectively through digital channels.'
    },
    {
        title: 'Remote Collaboration Tools',
        description: 'Discover how to leverage technology to enhance team collaboration and productivity.'
    },
    {
        title: 'Building Trust Digitally',
        description: 'And yes, we\'ll cover the essential techniques for building and maintaining trust in virtual teams!'
    }
];

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BENEFITS_DATA;
}

// Make available globally for inline use
window.BENEFITS_DATA = BENEFITS_DATA;