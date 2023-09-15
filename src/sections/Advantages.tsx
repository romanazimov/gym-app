import './Advantages.scss'
import Reason from '../components/Advantages/Reason'
import line from '../assets/advantages/icon_line.png'
import equipment from '../assets/advantages/icon_equipment.png'
import zones from '../assets/advantages/icon_fitness_zones.png'
import time from '../assets/advantages/icon_time.png'

export default function Advantages() {
    return (
        <section id='advantages'>
            <div className='container'>
                <h1>Reasons to Join</h1>
                <div className='reasons'>
                    <Reason
                        img={line}
                        info={{ 
                            title: '45000 SQ.FT.', 
                            description: 'A spacious gym for various sports - a safe distance between all exercise machines'
                        }}
                    />
                    <Reason
                        img={equipment}
                        info={{ 
                            title: 'TONS OF GYM EQUIPMENT', 
                            description: 'Premium gym equipment from LifeStyle, Hammer Strength, and TechnoGym'
                        }}
                    />
                    <Reason
                        img={zones}
                        info={{ 
                            title: '4 FITNESS ZONES', 
                            description: 'From cardio to functional strength training along with a seperate area for boxing and mma'
                        }}
                    />
                    <Reason
                        img={time}
                        info={{ 
                            title: '24/7 GYM OPERATION', 
                            description: 'We are open 24 hours a day including all holidays'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}