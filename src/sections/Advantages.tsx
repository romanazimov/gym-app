import Reason from '../components/Advantages/reason'
import test_img from '../assets/hero.png'

export default function Advantages() {
    return (
        <section id='advantages'>
            <div className='container'>
                <h1>Reasons to join</h1>
                <div className='reasons'>
                    <Reason
                        img={test_img}
                        info={{ title: '15000 sq.m.', description: 'A spacious gym for sports - a safe distance between exercise machines'}}
                    />
                    <Reason
                        img={test_img}
                        info={{ title: '15000 sq.m.', description: 'A spacious gym for sports - a safe distance between exercise machines'}}
                    />
                    {/* <Reason
                        img={test_img}
                        info={{ title: '15000 sq.m.', description: 'A spacious gym for sports - a safe distance between exercise machines'}}
                    />
                    <Reason
                        img={test_img}
                        info={{ title: '15000 sq.m.', description: 'A spacious gym for sports - a safe distance between exercise machines'}}
                    /> */}
                </div>
            </div>
        </section>
    )
}