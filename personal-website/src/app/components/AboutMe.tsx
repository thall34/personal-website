'use client'

import Link from 'next/link';

function AboutMe(): React.JSX.Element {
    return (
        <section id='about-me' className="fly-in-right">
            <h1>About <span className="highlight-text">Me</span></h1>
            <p>I was an Audio Post Re-Recording Mixer from June 2015 until May 2026 before I decided to change my career focus into web development.</p>
            <p>I have always had an interest in how computers work under the hood, and after doing some research I found a great online resource in the Odin Project.</p>
            <p>Over the past year and a half, I have went from not knowing anything about HTML to building complete full stack applications from scratch which is extremely rewarding.</p>
            <p>My goal is to bring my technical and creative expertise to any project/company I get to work with next.</p>
            <Link href='/blogs'>If you'd like to read more, head over to my blogs page</Link>
        </section>
    )
};

export default AboutMe;