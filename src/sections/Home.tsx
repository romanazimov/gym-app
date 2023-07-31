// import hero from '../assets/hero.png'
// import './Home.scss'

// export default function Home() {
//     return (
//         <section id='home'>
//             <div className='container'>
//                 <h1 className='main-txt'>Free trial sesion with a trainer</h1>
//             </div>
//             <div className='cont-img-hero'>
//                 <div className='overlay'></div>
//                 <img className='hero' src={hero} alt={""} />
//             </div>
//         </section>
//     )
// }

import hero from '../assets/hero.png'
import './Home.scss'

export default function Home() {
    return (
        <section id='home'>
            <div className='container'>
                <div className='txt-cont'>
                    <h1 className='main-txt'>Free trial session with a trainer</h1>
                </div>
                <div className='hero-cont'>
                    <div className='overlay'></div>
                    <img className='hero' src={hero} alt={""} />
                </div>
            </div>
        </section>
    )
}