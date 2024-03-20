import { useState } from 'react';
import CoverMyChannel from './CoverMyChannel';
import style_channels from './style_channels.module.css';
import { IOtherChannel } from '../../interfaces/IOtherChannel';
import ArticlesForOtherChannel from './ArticlesForOtherChannel';
import CoverOtherChannel from './CoverOtherChannel';

function OtherChannel(props:IOtherChannel) {
    // const [coverChannel, setCoverChannel] = useState<number>(props.coverChannelID);
    // const [channelCoverDialog, setchannelCoverDialog] = useState<boolean>(false);
    return (
        <>
  
    <CoverOtherChannel channelId={props.channelId} authorID={props.authorID} coverChannelID={props.coverChannelID} coverChannel={props.coverChannelID}/>
        <div className={style_channels.blockForMyChannelInfo_cover}>
            <div className={style_channels.blockForTopButtons}>
                <div className={style_channels.avatarChannelButton}>
                    <div className={style_channels.hoverBlockImg}>
                        <img alt='' className={style_channels.imgChannel} src={`/download_file.html?file_id=${props.avatarChannelID}`} id={props.avatarChannelID.toString()} />
                    </div>
                </div>
            </div>
            <div className={style_channels.titleChannel}>{props.channelName}</div>
            <div className={style_channels.channelDescript}>{props.channelDecript}</div>
            <div className={style_channels.authorChannel}>Авторы канала: 
                <span className={style_channels.nameAuthor}><a className={style_channels.linkAuthor} href={`/_wt/${props.authorID}`} target='_blank'> {props.authorFullname}</a></span>
            </div>
           
        </div>
        
        <ArticlesForOtherChannel 
                channelId={props.channelId}
                channelName={props.channelName}
                authorID={props.authorID}
                authorFullname={props.authorFullname}
                avatarChannelID={props.avatarChannelID}
                coverChannelID={props.coverChannelID}
                arrPostsInChannel={props.arrPostsInChannel}
                arrSubscriptionsInChannel={props.arrSubscriptionsInChannel}
                arrKnowlegesParts={props.arrKnowlegesParts}
                arrTags={props.arrTags}
                arrComments={props.arrComments} 
                arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
                />
        </>
    )
  }
  
  export default OtherChannel;
  