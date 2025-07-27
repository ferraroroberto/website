// Testimonials Data
// Centralized testimonials for easy maintenance and updates

const TESTIMONIALS_DATA = [
    {
        name: 'Corina Taban',
        handle: '@corinataban',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/e26e2145-6fd9-4239-9d74-4d81f4dd138b/corinataban.jpg',
        text: 'I attended Roberto\'s virtual communication workshop and it was <strong>engaging, insightful, and packed with practical tools</strong> that can be applied immediately. Roberto has a unique talent for making complex concepts accessible and fun, blending psychology, storytelling, and performance techniques to help participants elevate their virtual presence.',
        author: 'Corina Taban'
    },
    {
        name: 'Jun Han Chin',
        handle: '@junhanchin',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/c266aecc-2489-467d-ad0a-891be70b9ec1/junhanchin.jpg',
        text: 'Roberto\'s virtual communication workshop was really actionable. He gave us techniques and solutions suitable for different levels of implementation, <strong>from easy to advanced</strong>. His presentation was clear and easy to follow. I would attend future workshops by Roberto.',
        author: 'Jun Han Chin'
    },
    {
        name: 'Anne Jannier',
        handle: '@annejannier',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/d2ee8211-95bc-4a04-963b-220148cde121/annejannier.jpg',
        text: 'Roberto\'s workshop on virtual communication <strong>is worth every minute</strong>. He shares years of practice and helps you fix many things that make you dread Zoom calls. I cannot recommend it enough.',
        author: 'Anne Jannier'
    },
    {
        name: 'Francesco Fusco',
        handle: '@francescofusco',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/65749fc0-2ba6-4e32-9096-c9c0e88a6461/francescofusco.jpg',
        text: 'Roberto\'s energy and positive attitude are contagious. I came out of the workshop <strong>energized and inspired</strong>, with lots of new ideas to incorporate into my day-to-day routine. Not to mention, Roberto\'s illustrations are just legendary! I\'m looking forward to checking out what he comes up with next! 🙌',
        author: 'Francesco Fusco'
    },
    {
        name: 'Corinne Dufraisse',
        handle: '@corinne-dufraisse',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/cc24728f-c07a-40a6-8de0-7bf9898f2df5/corinne-dufraisse-a1b349a.jpg',
        text: 'I had the privilege of attending a virtual communication workshop led by Roberto and the session was stunning. Not only did we get hints and tips on how to improve our communication, but we were once again made aware of how important the connection to people is. The workshop was awsomwly led, Roberto\'s <strong>energy and approach are inspiring</strong>, and the group participation was really good even though people didn\'t know each other.',
        author: 'Corinne Dufraisse'
    },
    {
        name: 'Alex McAdam',
        handle: '@alexander-mcadam',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/4b2bf711-4316-49ab-a235-114b095ab6e1/alexander-mcadam.jpg',
        text: 'I had the pleasure of attending a workshop with Roberto on virtual communication, and it was truly enlightening. His insights were sharp, his approach engaging, and his energy infectious. Roberto creates an inspiring atmosphere that leaves participants <strong>motivated and equipped with practical knowledge</strong>.',
        author: 'Alex McAdam'
    },
    {
        name: 'Cinzia Biondi',
        handle: '@c-biondi',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/d76b5349-c2a9-4bed-a78d-cf39eccf4139/c-biondi.jpg',
        text: 'I joined Roberto\'s virtual communication workshop and really enjoyed it. It was <strong>fun, practical, and easy to follow</strong> with his amazing illustrations :) He showed science-backed ideas and performance tricks to make things simple. Voice Warm ups and body language tips were my favourite! I highly recommend it!',
        author: 'Cinzia Biondi'
    },
    {
        name: 'Sahir Maharaj',
        handle: '@sahir-maharaj',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/e40e11d4-563b-44b7-915e-c2729461095a/sahir-maharaj.jpg',
        text: 'I had the pleasure of attending a virtual communication workshop led by Roberto Ferraro that was both practical and highly relatable. The session offered realistic tips on preparation and structuring communication in virtual settings, which I found <strong>immediately applicable to my work</strong>. It also emphasized the importance of tone, engagement, and intentionality - key aspects that are often overlooked but make a noteworthy difference in virtual interactions.',
        author: 'Sahir Maharaj'
    },
    {
        name: 'Nadya Ichinomiya',
        handle: '@nadyaichinomiya',
        photo: 'https://images.squarespace-cdn.com/content/v1/65475ce2202bcd1c4fd1c5c8/458e5676-36b2-4009-9771-aafdc44c22fe/nadyaichinomiya.jpg',
        text: 'I recently attended Roberto\'s "Virtual Communication" workshop. I teach courses online at Sony Pictures and UCLA Extension and am always trying to find ways to improve the experience for the learners. Roberto\'s material was thoughtfully prepared and he <strong>delivered the content with humility and the intention</strong> to deliver as much value as possible.',
        author: 'Nadya Ichinomiya'
    }
];

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TESTIMONIALS_DATA;
}

// Make available globally for inline use
window.TESTIMONIALS_DATA = TESTIMONIALS_DATA; 