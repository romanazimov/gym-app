import './Reason.css'

interface ReasonProps {
    img: string;
    info: {
        title: string;
        description: string;
    };
}

export default function Reason({img, info}: ReasonProps) {
    return (
        <div className="reason-cont">
            <img className='img' src={img} alt={""} />
            <div className='info-cont'>
                <p className='title'>{info.title}</p>
                <p className='description'>{info.description}</p>
            </div>
        </div>
    )
}