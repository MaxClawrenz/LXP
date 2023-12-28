import { IMySubscriebers } from '../../interfaces/IMySubscriebers';
import CardSubscrieber from './CardSubscrieber';
import style_channels from './style_channels.module.css';

function MySubscriebers(props:IMySubscriebers) {
    return (               
           <div className={style_channels.blockForSubscriber}>
                <div className={style_channels.blockForTitlesSubsriberAndCount}>
                    <div className={style_channels.titleBlocksubscriber}>Подписчики</div>
                    <div className={style_channels.countBlocksubscriber}>{props.arrCountSubscriptionsChannels}</div>
                </div>
                <div className={style_channels.blockWithPhotosSubscribers}>
                    {props.arrSubscriptionsInChannel.map( (subscriber) => (
                        <CardSubscrieber 
                        subscriberId={subscriber.subscriberId} 
                        subscriberFullname={subscriber.subscriberFullname} 
                        subscriberPhoto={subscriber.subscriberPhoto} 
                        />
                    ))}
                </div>
                <div className='linkShowAllSubscribers'><a href='#' className='linkShowSubscribes'>Показать всех</a></div>
           </div>
       

    )
  }
  
  export default MySubscriebers;
  