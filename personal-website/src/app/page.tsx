import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div className='line-break'/>
            <Projects />
            <div className='line-break'/>
            <AboutMe />
            <div className='line-break'/>
            <Skills />
            <div className='line-break'/>
            <Contact />
            <div className='line-break'/>
        </>
    );
};