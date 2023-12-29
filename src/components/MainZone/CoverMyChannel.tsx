import { ICoverMyChannel } from '../../interfaces/ICoverMyChannel';
import style_channels from './style_channels.module.css';

function CoverMyChannel(props:ICoverMyChannel) {
    return (
        <div className={style_channels.blockForImgCoverChannel}>
            <img src='`/download_file.html?file_id=${props.coverChannelID}`' className={style_channels.imgCoverChannel} alt=''/>
        </div>

    )
  }
  
  export default CoverMyChannel;
  