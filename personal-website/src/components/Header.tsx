import Image from 'next/image';
import logo from '../../public/images/logo.png'

export default function Header() {
    return (
        <header>
            <Image src={logo} alt='Tyler Hall Logo' width={100} />
        </header>
    )
};