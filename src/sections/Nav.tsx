import './nav.scss';
import Logo from '../components/Logo';

export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <Logo />
                <div>
                    <ul>
                        <li>
                            Advantages
                        </li>
                        <li>
                            Membership
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Trainers
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}