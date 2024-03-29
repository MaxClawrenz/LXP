import { IAddCoverChannel } from '../../interfaces/IAddCoverChannel';
import style_channels from './style_channels.module.css';

function AddCoverChannel(props:IAddCoverChannel) {
    return (
         <div className={style_channels.blockForButtonAddCover}>
            <button className={style_channels.btnDialogForAddCover} >
                <div className={style_channels.iconAddCover}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M4.52927 3.9424C5.08011 3.9424 5.52834 3.49425 5.52834 2.94341C5.52834 2.39249 5.08011 1.94434 4.52927 1.94434C3.97842 1.94434 3.53027 2.39249 3.53027 2.94341C3.53027 3.49425 3.97842 3.9424 4.52927 3.9424ZM4.52927 2.53027C4.75708 2.53027 4.9424 2.71559 4.9424 2.94341C4.9424 3.17114 4.75708 3.35646 4.52927 3.35646C4.30153 3.35646 4.11621 3.17114 4.11621 2.94341C4.11621 2.71559 4.30153 2.53027 4.52927 2.53027Z" fill="black"/>
                        <path d="M9.63486 0.0727539H0.365143C0.163803 0.0727539 0 0.236557 0 0.437897V8.28412C0 8.48546 0.163803 8.64926 0.365143 8.64926H9.63486C9.8362 8.64926 10 8.48546 10 8.28412V0.437897C10 0.236557 9.8362 0.0727539 9.63486 0.0727539ZM9.41406 0.658691V5.29553L7.57126 3.45265C7.4511 3.33272 7.25571 3.33279 7.13562 3.45288L4.52934 6.05916L2.86453 4.39442C2.80632 4.33614 2.72888 4.30402 2.64648 4.30402C2.56416 4.30402 2.4868 4.33606 2.42859 4.39427L0.585938 6.23692V0.658691H9.41406ZM0.585938 8.06332V7.06555L2.64648 5.005L4.31122 6.66974C4.36951 6.72803 4.44695 6.76022 4.52934 6.76022C4.61159 6.76022 4.68903 6.7281 4.74716 6.66989L7.35352 4.06354L9.41414 6.12416V8.06332H0.585938Z" fill="black"/>
                    </svg>
                </div>
                <div className={style_channels.btnTextForAddCover}>
                Добавить обложку канала
                </div>
            </button>
       </div>

    )
  }
  
  export default AddCoverChannel;
  