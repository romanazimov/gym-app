import './Home.scss'
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <section id='home'>
            <div className='container'>
                <div className='img-cont'>
                    <img className='img' src={hero} alt={""} />
                </div>
            </div>
            <div className='text-cont'>
                <div className='title-cont'>
                    <p className='title'>Free trial session with a trainer</p>
                    {/* <button>Learn More</button> */}
                </div>
            </div>
        </section>
    )
}