import './Footer.scss'
import Logo from '../components/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMediaButton from '../components/SocialMediaButton';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className='about-col'>
                <Logo />
                <p className='about'>
                    Build strength and confidence at our gym with state-of-the-art 
                    equipment, personalized training, and a motivating community.
                </p>
            </div>
            <div className='address-col'>
                <h2>Address</h2>
                <p>123 Main Street</p>
                <p>Somewhere, NJ 12345</p>
                <p>United States</p>
            </div>
            <div className='contact-col'>
                <h2>Contact</h2>
                <div className='phone-cont'>
                    <FontAwesomeIcon className="icon-phone" icon={faPhone} />
                    <p>(732) 123-4567</p>
                </div>
                <div className='email-cont'>
                    <FontAwesomeIcon className="icon-email" icon={faEnvelope} />
                    <p>contact@gym24.com</p>
                </div>
                <div className='social-cont'>
                    <SocialMediaButton icon={faInstagram} />
                    <SocialMediaButton icon={faFacebook} />
                    <SocialMediaButton icon={faTwitter} />
                    <SocialMediaButton icon={faYoutube} />
                </div>
            </div>
        </footer>
    )
}