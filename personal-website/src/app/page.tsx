import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Websites from './components/Websites';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div className='line-break'/>
            <Projects />
            <div className='line-break'/>
            <Websites />
            <div className='line-break' />
            <AboutMe />
            <div className='line-break'/>
            <Skills />
            <div className='line-break'/>
            <Contact />
        </>
    );
};