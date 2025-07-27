// Illustrations Data
// Centralized illustrations for easy maintenance

const ILLUSTRATIONS_DATA = {
    topRow: [
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/849c899c-bd71-4689-b87e-9dc6763dd913/scales+-+ideas+in+your+brain+in+practice.png',
            alt: 'Scales – Ideas in Brain vs in Practice'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/1f598164-6934-400c-b42d-30f1748f52f1/venn+diagram+two+-+myth+reality+playful+serious.png',
            alt: 'Venn Diagram – Myth & Reality, Playful & Serious'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/7e2a8b7d-8436-49b0-8fa1-0cee0cb134c3/coal+diamond+-+anxiety+vs+I+care.png',
            alt: 'Coal Diamond – Anxiety vs I Care'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/33badf80-ac70-4082-8419-e9cb075d3f42/line+chart+-+subtract+smart+complicated+language.png',
            alt: 'Line Chart – Subtract Smart Complicated Language'
        }
    ],
    bottomRow: [
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/450c68ff-292e-47f9-92ce-b1a332dca935/emoji+cool+fearful+-+everyone+is+afraid.png',
            alt: 'Emoji Cool vs Fearful – Everyone Is Afraid'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/47f92778-a84f-434c-85c7-421e98214da5/clock+time+-+holding+silence.png',
            alt: 'Clock Time – Holding Silence'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/43ee4cf8-6088-4a4a-bc1f-f6e2196628bf/loudspeaker+small+big+-+words+body.png',
            alt: 'Loudspeaker – Words vs Body'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/f5b002f8-8af1-45d5-9e6e-855b534e80ed/emoji+cool+happy+sad+sweat+-+just+smile+vs+be+authentic.png',
            alt: 'Emoji – Just Smile vs Be Authentic'
        }
    ],
    groupPhoto: {
        url: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/52b40b3b-2743-48b9-afde-b0d58f3736c6/group+photo+-+final.png?format=1500w',
        alt: 'Group Photo'
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ILLUSTRATIONS_DATA;
}

// Make available globally for inline use
window.ILLUSTRATIONS_DATA = ILLUSTRATIONS_DATA; 