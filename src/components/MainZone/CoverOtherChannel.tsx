import { ICoverOtherChannel } from '../../interfaces/ICoverOtherChannel';
import style_channels from './style_channels.module.css';

function CoverOtherChannel(props:ICoverOtherChannel) {
    return (
    <>
        <div className={style_channels.blockForImgCoverChannel}>
            <img src={`/download_file.html?file_id=${props.coverChannel}`} className={style_channels.imgCoverChannel} alt=''/>
        </div>

</>
    )
  }
  
  export default CoverOtherChannel;
  