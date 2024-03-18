import { useState } from 'react';
import { IBtnEditChannel } from '../../interfaces/IBtnEditChannel';
import style_channels from './style_channels.module.css';
import FormEditChannel from './FormEditChannel';

function BtnEditChannel(props:IBtnEditChannel) {
  const [editChannelForm, setEditChannelForm] = useState<boolean>(false);
    return (
      <>
                <div className={style_channels.btnEditChannel} onClick={() => {editChannelForm?setEditChannelForm(false):setEditChannelForm(true)}}>Редактировать</div>

                {editChannelForm &&
                  <FormEditChannel key={props.channelId} channelId={props.channelId} channelName={props.channelName} authorID={props.authorID} authorFullname={props.authorFullname} channelDecript={props.channelDecript} avatarChannelID={props.avatarChannelID} coverChannelID={props.coverChannelID} arrPostsInChannel={props.arrPostsInChannel} arrSubscriptionsInChannel={props.arrSubscriptionsInChannel} arrKnowlegesParts={props.arrKnowlegesParts} arrTags={props.arrTags} arrComments={props.arrComments} arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels} arrAuthors={props.arrAuthors} editChannelForm={editChannelForm} setEditChannelForm={setEditChannelForm} arrAllClassificators={props.arrAllClassificators} coverChannel={props.coverChannel} setCoverChannel={props.setCoverChannel} avatarChannel={props.avatarChannel} setAvatarChannel={props.setAvatarChannel} channelAvatarDialog={props.channelAvatarDialog} setChannelAvatarDialog={props.setChannelAvatarDialog}/>
                }
      </>
    )
  }
  
  export default BtnEditChannel;
  