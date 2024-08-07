import { useEffect, useState } from "react";
import style_channels from "./style_channels.module.css";
import { IOtherChannel } from "../../interfaces/IOtherChannel";
import ArticlesForOtherChannel from "./ArticlesForOtherChannel";
import CoverOtherChannel from "./CoverOtherChannel";
import visitedChannels from "../../store/visitedChannels";

function OtherChannel(props: IOtherChannel) {

  useEffect(() => {
    const channelObj = {
      name: props.channelName,
      pict_id: props.avatarChannelID,
      channel_id: props.channelId,
      count: 1,
    };
    visitedChannels.unshiftChannels(channelObj);
  }, []);

  return (
    <>
      <CoverOtherChannel
        channelId={props.channelId}
        authorID={props.authorID}
        coverChannelID={props.coverChannelID}
        coverChannel={props.coverChannelID}
      />
      <div className={style_channels.blockForMyChannelInfo_cover}>
        <div className={style_channels.blockForTopButtons}>
          <div className={style_channels.avatarChannelButton}>
            <div className={style_channels.hoverBlockImg}>
              <img
                alt=""
                className={style_channels.imgChannel}
                src={`/download_file.html?file_id=${props.avatarChannelID}`}
                id={props.avatarChannelID.toString()}
              />
            </div>
          </div>
        </div>
        <div className={style_channels.titleChannel}>{props.channelName}</div>
        <div className={style_channels.channelDescript}>
          {props.channelDecript}
        </div>
        <div className={style_channels.authorChannel}>
          Авторы канала:
          <div className={style_channels.listAuthors}>
                <ul className={style_channels.ulListAuthors}>
            {props.arrAuthors.map( (author) =>
                <li className={style_channels.liListAuthors}><span className={style_channels.nameAuthor}><a className={style_channels.linkAuthor} href={`/_wt/${author.authorInArrId}`} target='_blank'> {author.authorInArrFullname}</a></span></li>
            )
            }
            </ul>
          </div>
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
  );
}

export default OtherChannel;
