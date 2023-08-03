import './Slideshow.scss'
import { useState } from 'react';

interface SlideshowProps {
    images: string[];
}

export default function Slideshow({images}: SlideshowProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return(
        <div className='slideshow-cont'>
            <img src={images[currentImageIndex]} />
            <div className='slideshow-actions'>
                <button onClick={goToPreviousImage}>Prev</button>
                <button onClick={goToNextImage}>Next</button>
            </div>
        </div>
    )
}