import { ICardSubscrieber } from '../../interfaces/ICardSubscrieber';
import style_channels from './style_channels.module.css';

function CardSubscrieber(props:ICardSubscrieber) {
    return (
        <div className={style_channels.cardSubscriber}>
            <a href={`/_wt/${props.subscriberId}`} className='linkSubscriber' target='_blank'>
                <img className={style_channels.imgSubsriber} src={props.subscriberPhoto} alt={props.subscriberFullname} id={`${props.subscriberId}`}/>
            </a>
        </div>
    )
}

export default CardSubscrieber