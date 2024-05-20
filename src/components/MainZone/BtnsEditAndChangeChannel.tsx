import { IBtnsEditAndChangeChannel } from '../../interfaces/IBtnsEditAndChangeChannel';
import BtnChangeChannelItem from './BtnChangeChannelItem';
import BtnEditChannel from './BtnEditChannel';
import style_channels from './style_channels.module.css';

function BtnsEditAndChangeChannel(props:IBtnsEditAndChangeChannel) {
    return (
            <div className={style_channels.blockBtnsForSelect}>
               <BtnEditChannel key={props.channelId} channelId={props.channelId} channelName={props.channelName} authorID={props.authorID} authorFullname={props.authorFullname} channelDecript={props.channelDecript} avatarChannelID={props.avatarChannelID} coverChannelID={props.coverChannelID} arrPostsInChannel={props.arrPostsInChannel} arrSubscriptionsInChannel={props.arrSubscriptionsInChannel} arrKnowlegesParts={props.arrKnowlegesParts} arrTags={props.arrTags} arrComments={props.arrComments} arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels} arrAuthors={props.arrAuthors} arrAllClassificators={props.arrAllClassificators} coverChannel={props.coverChannel} setCoverChannel={props.setCoverChannel} avatarChannel={props.avatarChannel} setAvatarChannel={props.setAvatarChannel} channelAvatarDialog={props.channelAvatarDialog} setChannelAvatarDialog={props.setChannelAvatarDialog} nameChannel = {props.nameChannel} setNameChannel = {props.setNameChannel} descriptChannel = {props.descriptChannel} setDescriptChannel = {props.setDescriptChannel}/>

               <BtnChangeChannelItem key={props.channelId} channelId={props.channelId} channelName={props.channelName} authorID={props.authorID} authorFullname={props.authorFullname} channelDecript={props.channelDecript} avatarChannelID={props.avatarChannelID} coverChannelID={props.coverChannelID} arrPostsInChannel={props.arrPostsInChannel} arrSubscriptionsInChannel={props.arrSubscriptionsInChannel} arrKnowlegesParts={props.arrKnowlegesParts} arrTags={props.arrTags} arrComments={props.arrComments} arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels} arrAuthors={props.arrAuthors} arrAllClassificators = {props.arrAllClassificators}/>
               

            </div>
    )
  }
  
  export default BtnsEditAndChangeChannel;
  