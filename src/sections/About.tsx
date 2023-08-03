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
            <h1>About us</h1>
            <div className='container'>
                <div className='description'>
                    <p className='desc-title'>About us</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Et 
                        tortor consequat id porta nibh. Cras semper auctor neque vitae. </p>
                    <p>Felis donec et odio pellentesque diam volutpat commodo. Morbi leo urna molestie 
                        at elementum. Maecenas sed enim ut sem viverra. Arcu non odio 
                        euismod lacinia. Sapien et ligula ullamcorper malesuada proin libero. 
                        Cursus euismod quis viverra nibh cras pulvinar mattis. Odio euismod 
                        lacinia at quis risus. </p>
                    <p>Lectus proin nibh nisl condimentum id venenatis 
                        a. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper 
                        dignissim cras. Diam quis enim lobortis scelerisque fermentum dui 
                        faucibus in. </p>
                </div>
                <Slideshow images={images}/>
            </div>
        </section>
    )
}