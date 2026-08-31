import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
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