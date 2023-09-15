import './Nav.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../components/Logo';

export default function Nav() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <nav>
            <div className='container'>
                <Logo />

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes className='hamburger' />)
                        : (<FaBars className='hamburger' />)}
                </div>

                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <ul>
                        <li>
                            <Link to="advantages" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Advantages</Link>
                        </li>
                        <li>
                            <Link to="membership" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Membership</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="team" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Team</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}