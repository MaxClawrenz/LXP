import AddCoverChannel from './AddCoverChannel';
import ArticlesForMyChannel from './ArticlesForMyChannel';
import MyChannelInfo from './MyChannelInfo';
import style_channels from './style_channels.module.css';

function MyChannel() {
    return (
    <div className={style_channels.channel_block}>
        <AddCoverChannel />
        <MyChannelInfo />
        <ArticlesForMyChannel />  
    </div>
    )
  }
  
  export default MyChannel;
  