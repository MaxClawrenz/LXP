import { IBtnChangeChannelItem } from '../../interfaces/IBtnChangeChannelItem';
import style_channels from './style_channels.module.css';

function BtnChangeChannelItem(props:IBtnChangeChannelItem) {
    return (
           
                <div className={style_channels.btnChangeChannel}>Сменить канал</div>


    )
  }
  
  export default BtnChangeChannelItem;
  