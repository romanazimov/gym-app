import hero from '../assets/hero.png'
import './Home.scss'

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
                </div>
            </div>
        </section>
    )
}