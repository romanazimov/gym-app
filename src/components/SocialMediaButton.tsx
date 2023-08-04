import './SocialMediaButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialMediaProps {
    icon: IconDefinition;
}

export default function SocialMediaButton({ icon }: SocialMediaProps) {
    return (
        <div className='icon-cont'>
            <FontAwesomeIcon className='icon' icon={icon} />
        </div>
    )
}