import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='page-nav'>
                    <li>
                        <Link href='/'>Back to Main Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};