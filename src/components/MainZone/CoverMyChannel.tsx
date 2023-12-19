import style_channels from './style_channels.module.css';

function CoverMyChannel() {
    return (
        <div className={style_channels.blockForImgCoverChannel}>
            <img src='https://via.placeholder.com/600/f66b97' className={style_channels.imgCoverChannel} alt=''/>
        </div>

    )
  }
  
  export default CoverMyChannel;
  