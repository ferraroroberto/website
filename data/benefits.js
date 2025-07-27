// Benefits Data
// Centralized benefits content for easy maintenance

const BENEFITS_DATA = [
    {
        title: 'Memorable First Impressions',
        description: 'Learn how to make a stronger, more memorable impression from the moment you join a call.'
    },
    {
        title: 'Engaging Communication',
        description: 'Discover how to use your voice, gestures, and presence to keep people engaged.'
    },
    {
        title: 'Avoid Common Pitfalls',
        description: 'Avoid common mistakes that can derail even the best-prepared sessions.'
    },
    {
        title: 'Technical Mastery',
        description: 'And yes, we\'ll talk about the all-important technical setup, too!'
    }
];

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BENEFITS_DATA;
}

// Make available globally for inline use
window.BENEFITS_DATA = BENEFITS_DATA; 