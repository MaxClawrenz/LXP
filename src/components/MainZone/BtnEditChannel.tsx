import { IBtnEditChannel } from '../../interfaces/IBtnEditChannel';
import style_channels from './style_channels.module.css';

function BtnEditChannel(props:IBtnEditChannel) {
    return (
                <div className={style_channels.btnEditChannel}>Редактировать</div>
    )
  }
  
  export default BtnEditChannel;
  