import { BlogObject } from "../../types/types";

const blogPosts: BlogObject[] = [
    {
        id: 0,
        name: 'Hello World',
        publishDate: '2026/09/04',
        text: `Hello everyone! I wanted to start a blog on my site to share my experiences with life and changing careers. If you haven't already, feel free to check out the About Me section of my main page for a brief summary of my recent career change. I started out my life in the small town of Listowel, Ontario, Canada. I went to high school at the local high school LDSS where I went through many different future aspirations from Auto Mechanic, Roller Coaster Designer, Video Game Designer, and ultimately I settled into the arts in my final high school years. It was around Grade 10 that I was gifted Guitar Hero III for my birthday and that experience made me pick up a guitar, and later drums to try and pursue a career in music. While in high school I met the love of my life and my current wife Amber. We both went to Fanshawe College, her for Radio Broadcasting and I was in Music Industry Arts. It was a transformative experience getting to be around so many talented people who inspired me each day. After graduating from Music Industry Arts, I fell in love with the Audio Post Production projects we were assigned in the last year and decided to take the post-grad Audio Post Production program. I pushed myself as hard as I could and with the support of my peers around me and my passion for audio was able to achieve my highest GPA ever and won the Studio 306 award for the program for demonstrating exceptional skills in Audio Post. Whew this post is getting long so I will pick up with more of the story next time!`,
        images: [
            {
                imageSrc: 'blog1image2_wcxvkj',
                altText: 'Me playing guitar in the performance hall at college'
            },
            {
                imageSrc: 'blog1Image1_rflofx',
                altText: 'The large mixing console for first year at Music Industry Arts',
            },
        ],
    }
];

export default blogPosts;