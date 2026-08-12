import Hero from './components/Hero';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <AboutMe />
            <Skills />
            <Contact />
        </>
    );
};