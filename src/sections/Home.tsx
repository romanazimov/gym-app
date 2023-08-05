import './Home.scss'
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <section id='home'>
            <div className='container'>
                <div className='img-cont'>
                    <img className='hero-img' src={hero} alt={""} />
                </div>
            </div>
            <div className='text-cont'>
                <div className='title-cont'>
                    <p className='title'>Welcome to GYM24, a gym open 24/7 for your convenience</p>
                    {/* <button>Learn More</button> */}
                </div>
            </div>
        </section>
    )
}