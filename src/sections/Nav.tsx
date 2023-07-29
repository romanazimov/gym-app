import './nav.scss';

export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <p className='logo'>
                    GYM<span className='sub-logo'>24</span>
                </p>
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