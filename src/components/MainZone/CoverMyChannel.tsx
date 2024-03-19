import { ICoverMyChannel } from '../../interfaces/ICoverMyChannel';
import EditCoverChannelForm from './EditCoverChannelForm';
import style_channels from './style_channels.module.css';

function CoverMyChannel(props:ICoverMyChannel) {
    return (
    <>
        <div className={style_channels.blockForImgCoverChannel} onClick={() => {props.setchannelCoverDialog(true)} }>
            <div className={style_channels.iconChangedAndText}>
                            <div className={style_channels.blockicon}>
                                <svg id={style_channels.iconChangedAvatar} xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M8.25138 7.67001C9.2549 7.67001 10.0715 6.7817 10.0715 5.68985C10.0715 4.59784 9.2549 3.70953 8.25138 3.70953C7.24786 3.70953 6.43143 4.59784 6.43143 5.68985C6.43143 6.7817 7.24786 7.67001 8.25138 7.67001ZM8.25138 4.87095C8.66641 4.87095 9.00402 5.23828 9.00402 5.68985C9.00402 6.14126 8.66641 6.50859 8.25138 6.50859C7.83649 6.50859 7.49888 6.14126 7.49888 5.68985C7.49888 5.23828 7.83649 4.87095 8.25138 4.87095Z" fill="white" />
                                <path d="M17.5527 0H0.665214C0.298415 0 0 0.324684 0 0.723771V16.2762C0 16.6753 0.298415 17 0.665214 17H17.5527C17.9195 17 18.2179 16.6753 18.2179 16.2762V0.723771C18.2179 0.324684 17.9195 0 17.5527 0ZM17.1504 1.16142V10.3524L13.7932 6.69949C13.5743 6.46177 13.2184 6.46192 12.9996 6.69995L8.25151 11.866L5.21858 8.56624C5.11253 8.4507 4.97145 8.38703 4.82134 8.38703C4.67137 8.38703 4.53043 8.45055 4.42438 8.56594L1.06746 12.2184V1.16142H17.1504ZM1.06746 15.8386V13.8608L4.82134 9.7765L7.85413 13.0763C7.96032 13.1918 8.1014 13.2556 8.25151 13.2556C8.40134 13.2556 8.54242 13.192 8.64833 13.0766L13.3966 7.91037L17.1506 11.9948V15.8386H1.06746Z" fill="white" />
                                </svg>
                            </div>
                            <div className={style_channels.changedText}>Изменить</div>
            </div>
            <img src={`/download_file.html?file_id=${props.coverChannel}`} className={style_channels.imgCoverChannel} alt=''/>
        </div>

    { props.channelCoverDialog &&
        <div className={style_channels.blockForMyCoverEdit}>
            <EditCoverChannelForm channelId={props.channelId} coverChannelID={props.coverChannelID} channelCoverDialog={props.channelCoverDialog} setchannelCoverDialog={props.setchannelCoverDialog} coverChannel={props.coverChannel} setCoverChannel={props.setCoverChannel} />
        </div>
    }

</>
    )
  }
  
  export default CoverMyChannel;
  