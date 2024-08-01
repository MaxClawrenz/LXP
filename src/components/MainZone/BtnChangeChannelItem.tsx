import { IBtnChangeChannelItem } from '../../interfaces/IBtnChangeChannelItem';
import style_channels from './style_channels.module.css';
import Channels from "../../store/MainZoneChannels";

function BtnChangeChannelItem(props:IBtnChangeChannelItem) {

  const changeChannel = () => {
    Channels.changeChannel(); // Вызываем метод changeChannel из хранилища
  };
  
    return (
           
                <div className={style_channels.btnChangeChannel} onClick={changeChannel}>Сменить канал</div>


    )
  }
  
  export default BtnChangeChannelItem;
  