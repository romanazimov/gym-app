import './About.scss'
import Slideshow from '../components/About/Slideshow'

import gym_1 from '../assets/About/gym_1.png'
import gym_2 from '../assets/About/gym_2.png'
import gym_3 from '../assets/About/gym_3.png'
import gym_4 from '../assets/About/gym_4.png'

export default function About() {
    const images = [ gym_1, gym_2, gym_3, gym_4 ];

    return (
        <section id='about'>
            <h1>About Us</h1>
            <div className='container'>
                <div className='description'>
                    <p className='desc-title'>About us</p>
                    <p>Welcome to Gym24, where fitness meets flexibility! Our spacious 
                        facility caters to diverse athletic interests, providing ample room for 
                        various sports enthusiasts. With a wide array of state-of-the-art equipment, 
                        you'll find everything you need to crush your fitness goals. Our gym boasts 
                        4 dedicated fitness zones, ensuring a tailored experience for every workout style. </p>
                    <p>At [Your Gym Name], we're dedicated to your fitness journey. That's why we're open 
                        24/7, 365 days a year, including holidays. Your health and fitness never take a 
                        break, and neither do we. Join us in shaping a healthier, stronger you!</p>
                </div>
                <Slideshow images={images}/>
            </div>
        </section>
    )
}