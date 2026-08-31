import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='social-nav'>
                    <li>
                        <Link href='https://github.com/thall34' className='social-link' target='_blank' rel='noopener noreferrer'>
                        <img src="https://res.cloudinary.com/desbleq8y/image/upload/v1786572946/git_gc1ysu.svg" alt="GitHub Account for Tyler" />
                        <p>Github</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.linkedin.com/in/tyler-hall-7b8a0372/' className='social-link' target='_blank' rel='noopener noreferrer'>
                        <img src="https://res.cloudinary.com/desbleq8y/image/upload/v1788211904/LinkedIn_logo_initials_lxnmnc.png" alt="LinkedIn Account for Tyler" />
                        <p>LinkedIn</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className='page-nav'>
                    <li>
                        <Link href='#hero'>Back to Top</Link>
                    </li>
                    <li>
                        <Link href='#projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='#about-me'>About</Link>
                    </li>
                    <li>
                        <Link href='#skills'>Skills</Link>
                    </li>
                    <li>
                        <Link href='#contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};