import { ProjectObject } from '../types/types';

const mainProjects: ProjectObject[] = [
    {
        id: 0,
        url: 'https://social-media-app-frontend-6jg7.onrender.com/',
        title: 'Full Stack Social Media App',
        imageSrc: 'social-media_q4ilwt',
        imageAlt: 'Social Media Application',
        imageHeight: 2022,
        imageWidth: 2697,
        description: 'The capstone project for my online course curriculum.',
        techStack: 'I designed the application from the ground up using Node.js with Express and Prisma ORM for the backend and React.js for the frontend.',
        learningOutcome: 'This project really helped solidify my understanding of full stack design, and I learnt a lot about Jest/Supertest that I had challenges with in the past.',
    },
    {
        id: 1,
        url: 'https://wheres-waldo-liart.vercel.app/',
        title: `Where's Waldo (Photo Tagging App)`,
        imageSrc: 'waldo_nvdgsa',
        imageAlt: 'Photo Tagging App that uses Waldo pictures',
        imageHeight: 1600,
        imageWidth: 2560,
        description: 'A full stack game application that was one of the final projects for my online course curriculum.',
        techStack: 'I designed the application from the ground up using Node.js with Express and Prisma ORM for the backend and React.js for the frontend.',
        learningOutcome: 'This project really tested my creative thinking to create a scalable solution that works for any image and works on different screen sizes using normalization.',
    },
    {
        id: 2,
        url: 'https://inventory-application-qzws.onrender.com/',
        title: 'Backend Inventory Application',
        imageSrc: 'inventory-app_kvakti',
        imageAlt: 'Inventory Application',
        imageHeight: 2181,
        imageWidth: 3082,
        description: 'A backend-focused project that uses EJS for page views.',
        techStack: 'I designed the application from the ground up using Node.js with Express utilizing EJS and PostgreSQL.',
        learningOutcome: 'This project is where I really started to understand back end and utilizing MVC layout for scalability.',
    },
];

export default mainProjects;