import { IMyChannel } from '../../interfaces/IMyChannel';
import MyChannelInfo from './MyChannelInfo';
import style_channels from './style_channels.module.css';


function MyChannel(props:IMyChannel) {
  
    return (
    <div className={style_channels.channel_block}>
        <MyChannelInfo 
          key={props.channelId}
          channelId={props.channelId}
          channelName={props.channelName}
          authorID={props.authorID}
          channelDecript={props.channelDecript}
          avatarChannelID={props.avatarChannelID}
          coverChannelID={props.coverChannelID}
          arrPostsInChannel={props.arrPostsInChannel}
          arrSubscriptionsInChannel={props.arrSubscriptionsInChannel}
          arrKnowlegesParts={props.arrKnowlegesParts}
          arrTags={props.arrTags}
          authorFullname={props.authorFullname}
          arrComments={props.arrComments}
          arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
          arrAuthors={props.arrAuthors}
          arrAllClassificators={props.arrAllClassificators} 
          posts={props.posts}                
                />

    </div>
    )
  }
  
  export default MyChannel;
  