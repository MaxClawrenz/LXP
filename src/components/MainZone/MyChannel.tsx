import { IMyChannel } from '../../interfaces/IMyChannel';
import MyChannelInfo from './MyChannelInfo';
import OtherChannel from './OtherChannel';
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
                />

              {/* <OtherChannel 
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
                /> */}
    </div>
    )
  }
  
  export default MyChannel;
  