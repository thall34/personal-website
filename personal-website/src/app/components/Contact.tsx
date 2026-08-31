import Link from 'next/link';

function Contact(): React.JSX.Element {
    return (
        <section id='contact'>
            <h1>Contact <span className='highlight-text'>Me</span></h1>
            <p>You can contact me at any of the following:</p>
            <a href='mailto:thall347321@gmail.com' target='_blank' rel='noopener noreferrer'>
                <p>Email: thall347321@gmail.com</p>
            </a>
            <a href='tel:+14163177325'>
                <p>Cell Phone: 416-317-7325</p>
            </a>
            <Link href='https://linkedin.com/in/tyler-hall-7b8a0372' target='_blank' rel='noopener noreferrer'>
                <p>LinkedIn: linkedin.com/in/tyler-hall-7b8a0372</p>
            </Link>
            <Link href='/files/Resume - Technical.pdf' target='_blank' rel='noopener noreferrer'>
                <p>View My Resume</p>
            </Link>
        </section>
    )
};

export default Contact;