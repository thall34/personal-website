import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='page-nav'>
                    <li>
                        <Link href='#hero'>Top of Page</Link>
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
                    <li>
                        <Link href='/blogs'>Blogs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};