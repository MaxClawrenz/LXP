import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import OtherChannelInfo from "../../store/OtherChannelInfo";
import OtherChannel from "./OtherChannel";
import style from "../../style.module.css";
import style_channels from "./style_channels.module.css";
import { useLocation } from "react-router-dom";

function MainZoneOtherChannel() {
  const location = useLocation();

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const channelId = pathArr[pathArr.length - 1];
    OtherChannelInfo.getChannelsInfo(channelId);
  }, [location.pathname]);

  return (
    <div className={style.MainPage}>
      <div className={style_channels.channel_block}>
        {OtherChannelInfo.channelsInfo.map((channel: any) => (
          <OtherChannel
            key={channel.channelId}
            channelId={channel.channelId}
            channelName={channel.channelName}
            authorID={channel.authorID}
            authorFullname={channel.authorFullname}
            channelDecript={channel.channelDecript}
            avatarChannelID={channel.avatarChannelID}
            coverChannelID={channel.coverChannelID}
            arrPostsInChannel={channel.arrPostsInChannel}
            arrSubscriptionsInChannel={channel.arrSubscriptionsInChannel}
            arrKnowlegesParts={channel.arrKnowlegesParts}
            arrTags={channel.arrTags}
            arrComments={channel.arrComments}
            arrCountSubscriptionsChannels={
              channel.arrCountSubscriptionsChannels
            }
          />
        ))}
      </div>
    </div>
  );
}

export default observer(MainZoneOtherChannel);
