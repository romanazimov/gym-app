import './Trainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface TrainerProps {
    info: {
        img: string;
        name: string;
        ig_handle: string;
        twitter_handle: string;
        yt_handle: string;
    }
}

export default function Trainer({info}:TrainerProps) {
    return (
        <div className="trainer-cont">
            <img className='trainer-img' src={info.img} />
            <p className='trainer-name'>{info.name}</p>
            <div className='social-cont'>
                <div className='instagram'>
                    <FontAwesomeIcon className='ig-icon' icon={faInstagram} />
                </div>
                <div className='twitter'>
                    <FontAwesomeIcon className='twitter-icon' icon={faTwitter} />
                </div>
                <div className='youtube'>
                    <FontAwesomeIcon className='yt-icon' icon={faYoutube} />
                </div>
            </div>
        </div>
    )
}