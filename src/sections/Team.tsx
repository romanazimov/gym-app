import './Team.scss'
import Trainer from '../components/Team/Trainer'

import trainer_1 from '../assets/Team/trainer_1.png'
import trainer_2 from '../assets/Team/trainer_2.png'
import trainer_3 from '../assets/Team/trainer_3.png'
import trainer_4 from '../assets/Team/trainer_4.png'
import trainer_5 from '../assets/Team/trainer_5.png'
import trainer_6 from '../assets/Team/trainer_6.png'
import trainer_7 from '../assets/Team/trainer_7.png'
import trainer_8 from '../assets/Team/trainer_8.png'

export default function Team() {
    return(
        <section id='Team'>
            <div className='container'>
                <h1>Meet the Team</h1>
                <div className='team-cont'>
                    <Trainer 
                        info={{
                            img: trainer_1,
                            name: "Victoria Shurpik",
                            ig_handle: "instagram.com/vshurpik",
                            twitter_handle: "twitter.com/vshurpik",
                            yt_handle: "youtube.com/vshurpik"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_2,
                            name: "Elizabeth Lavrinenko",
                            ig_handle: "instagram.com/elavrinenko",
                            twitter_handle: "twitter.com/elavrinenko",
                            yt_handle: "youtube.com/elavrinenko"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_3,
                            name: "Ivan Gladkikh",
                            ig_handle: "instagram.com/igladkikh",
                            twitter_handle: "twitter.com/igladkikh",
                            yt_handle: "youtube.com/igladkikh"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_4,
                            name: "Lyudmila Sabilo",
                            ig_handle: "instagram.com/lsabilo",
                            twitter_handle: "twitter.com/lsabilo",
                            yt_handle: "youtube.com/lsabilo"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_5,
                            name: "Evgeny Gurkov",
                            ig_handle: "instagram.com/egurkov",
                            twitter_handle: "twitter.com/egurkov",
                            yt_handle: "youtube.com/egurkov"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_6,
                            name: "Anatoly Prytytsky",
                            ig_handle: "instagram.com/aprytytsky",
                            twitter_handle: "twitter.com/aprytytsky",
                            yt_handle: "youtube.com/aprytytsky"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_7,
                            name: "Victor Ludkovich",
                            ig_handle: "instagram.com/vludkovich",
                            twitter_handle: "twitter.com/vludkovich",
                            yt_handle: "youtube.com/vludkovich"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_8,
                            name: "Maria Masyak",
                            ig_handle: "instagram.com/mmasyak",
                            twitter_handle: "twitter.com/mmasyak",
                            yt_handle: "youtube.com/mmasyak"
                    }}
                    />
                </div>
            </div>
        </section>
    )
}