import './Pass.scss'

interface PassProps {
    title: string;
    cost: string;
    info: string[];
}

export default function Passes({title, cost, info}: PassProps) {
    return (
        <div id="pass-container">
            <div className="pass-header">
                <p className='pass-title'>{title}</p>
                <p className='pass-cost'>{cost}</p>
            </div>
            <div className='inner-body'>
                <div className="pass-body">
                    <ul className='pass-info'>
                        {info.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}