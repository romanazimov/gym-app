import './Membership.scss'
import Pass from '../components/Membership/Pass'

export default function Membership() {
    return (
        <section id='membership'>
            <p className='section-title'>Gym Membership</p>
            <p className='sub-title'></p>
            <div className='passes'>
                <Pass
                    title={'Trial'}
                    cost={'$0'}
                    info={[
                        '5 day free trial',
                        '24/7 facility access excluding holidays',
                        'Facility tour with one of our trainers'
                    ]}
                />
                <Pass
                    title={'Basic'}
                    cost={'$20'}
                    info={[
                        `Everything from the 'Trial' package`,
                        'Visit without restrictions 24/7',
                        'Individual training program',
                    ]}
                />
                <Pass
                    title={'Ultimate'}
                    cost={'$30'}
                    info={[
                        `Everything from the 'Easy Start' package`,
                        'Access to the VTRAINER application',
                        'Trainer support'
                    ]}
                />
            </div>
        </section>
    )
}