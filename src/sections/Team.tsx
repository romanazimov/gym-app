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
        <section id='team'>
            <div className='container'>
                <h1>Meet the Team</h1>
                <div className='team-cont'>
                    <Trainer 
                        info={{
                            img: trainer_1,
                            name: "Emily Smith",
                            ig_handle: "instagram.com/esmith",
                            twitter_handle: "twitter.com/esmith",
                            yt_handle: "youtube.com/esmith"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_2,
                            name: "Sarah Davis",
                            ig_handle: "instagram.com/sdavis",
                            twitter_handle: "twitter.com/sdavis",
                            yt_handle: "youtube.com/sdavis"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_3,
                            name: "Daniel Wilson",
                            ig_handle: "instagram.com/dwilson",
                            twitter_handle: "twitter.com/dwilson",
                            yt_handle: "youtube.com/dwilson"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_4,
                            name: "Jessica Martinez",
                            ig_handle: "instagram.com/jmartinez",
                            twitter_handle: "twitter.com/jmartinez",
                            yt_handle: "youtube.com/jmartinez"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_5,
                            name: "James Anderson",
                            ig_handle: "instagram.com/janderson",
                            twitter_handle: "twitter.com/janderson",
                            yt_handle: "youtube.com/janderson"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_6,
                            name: "Michael Brown",
                            ig_handle: "instagram.com/mbrown",
                            twitter_handle: "twitter.com/mbrown",
                            yt_handle: "youtube.com/mbrown"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_7,
                            name: "David Taylor",
                            ig_handle: "instagram.com/dtaylor",
                            twitter_handle: "twitter.com/dtaylor",
                            yt_handle: "youtube.com/dtaylor"
                    }}
                    />
                    <Trainer 
                        info={{
                            img: trainer_8,
                            name: "Olivia Johnson",
                            ig_handle: "instagram.com/ojohnson",
                            twitter_handle: "twitter.com/ojohnson",
                            yt_handle: "youtube.com/ojohnson"
                    }}
                    />
                </div>
            </div>
        </section>
    )
}