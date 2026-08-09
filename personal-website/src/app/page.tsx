import Image from 'next/image';
import Link from 'next/link'
import socialMediaApp from '../../public/images/social-media.png';
import waldo from '../../public/images/waldo.jpg';
import inventoryApp from '../../public/images/inventory-app.png';

export default function Home() {
    return (
        <>
            <section className="hero custom-background bounce-element">
                <h1>Hello! My name is Tyler Hall.</h1>
                <p>I am a junior web developer from Canada that specializes in full stack development.</p>
                <p>I would love to get in touch and help bring your projects to life!</p>
            </section>
            <section className="projects">
                <div className="project-card left custom-background">
                    <div className='project-card-header'>
                        <h1>Full Stack Social Media App</h1>
                        <Image src={socialMediaApp} alt='Social Media Application' />
                    </div>
                    <div className='project-card-body'>
                        <p>The capstone project for my online course curriculum.</p>
                        <p>I designed the application from the ground up using Node.js with Express and Prisma ORM for the backend and React.js for the frontend.</p>
                        <p>This project really helped solidify my understanding of full stack design, and I learnt a lot about Jest/Supertest that I had challenges with in the past.</p>
                    </div>
                </div>
                <div className="project-card right custom-background">
                    <div className='project-card-body'>
                        <p>A full stack game application that was one of the final projects for my online course curriculum.</p>
                        <p>I designed the application from the ground up using Node.js with Express and Prisma ORM for the backend and React.js for the frontend.</p>
                        <p>This project really tested my creative thinking to create a scalable solution that works for any image and works on different screen sizes using normalization.</p>
                    </div>
                    <div className='project-card-header'>
                        <h1>Where's Waldo (Photo Tagging App)</h1>
                        <Image src={waldo} alt='Photo Tagging App that uses Waldo pictures' />
                    </div>
                </div>
                <div className="project-card left custom-background">
                    <div className='project-card-header'>
                        <h1>Backend Inventory Application</h1>
                        <Image src={inventoryApp} alt='Inventory Application' />
                    </div>
                    <div className='project-card-body'>
                        <p>A backend-focused project that uses EJS for page views.</p>
                        <p>I designed the application from the ground up using Node.js with Express utilizing EJS and PostgreSQL.</p>
                        <p>This project is where I really started to understand back end and utilizing MVC layout for scalability.</p>
                    </div>
                </div>
            </section>
            <section className='about-me custom-background'>
                <h1>About Me</h1>
                <p>I was an Audio Post Re-Recording Mixer from June 2015 until May 2026 before I decided to change my career focus into web development.</p>
                <p>I have always had an interest in how computers work under the hood, and after doing some research I found a great online resource in the Odin Project.</p>
                <p>Over the past year, I have went from not knowing anything about HTML to building complete full stack applications from scratch which is extremely rewarding.</p>
                <p>My goal is to bring my technical and creative expertise to any project/company I get to work with next.</p>
            </section>
            <section className='skills custom-background'>
                <div className='skill-card'>
                    <h1>Languages</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript(ES6+)</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div className='skill-card'>
                    <h1>Frameworks</h1>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div className='skill-card'>
                    <h1>Tools & Database</h1>
                    <ul>
                        <li>Git/Github</li>
                        <li>PostgreSQL</li>
                        <li>Webpack</li>
                        <li>Jest</li>
                        <li>RESTful APIs</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </section>
            <section className='contact custom-background'>
                <h1>Contact Me</h1>
                <p>You can contact me at any of the following:</p>
                <p>Email: thall347321@gmail.com</p>
                <p>Cell Phone: 416-317-7325</p>
                <Link href='https://linkedin.com/in/tyler-hall-7b8a0372' target='_blank' rel='noopener noreferrer'>
                    <p>LinkedIn: linkedin.com/in/tyler-hall-7b8a0372</p>
                </Link>
                <Link href='/files/resume.pdf' target='_blank' rel='noopener noreferrer'>
                    <p>View My Resume</p>
                </Link>
            </section>
        </>
    );
};