import MyChannel from "./MyChannel";
import Channels from "../../store/MainZoneChannels";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import style from "../../style.module.css";
import SkeletCard from "./SkeletCard";
import NotFoundIcon from "./MainIcons/NotFoundIcon";

function MainZoneChannels() {
  useEffect(() => {
    Channels.getChannels();
  }, []);

  const currentChannel = Channels.currentChannel;

  return (
    <div className={style.MainZone}>
      {currentChannel &&
        !Channels.isLoading &&
        // Channels.channelsArr.slice(0, 1).map((channel) => (
          // Отрисовываем компонент только для первого элемента в массиве
          <MyChannel
            key={currentChannel.channelId}
            channelId={currentChannel.channelId}
            channelName={currentChannel.channelName}
            authorID={currentChannel.authorID}
            channelDecript={currentChannel.channelDecript}
            avatarChannelID={currentChannel.avatarChannelID}
            coverChannelID={currentChannel.coverChannelID}
            arrPostsInChannel={currentChannel.arrPostsInChannel}
            arrSubscriptionsInChannel={currentChannel.arrSubscriptionsInChannel}
            arrKnowlegesParts={currentChannel.arrKnowlegesParts}
            arrTags={currentChannel.arrTags}
            authorFullname={currentChannel.authorFullname}
            arrComments={currentChannel.arrComments}
            arrCountSubscriptionsChannels={
              currentChannel.arrCountSubscriptionsChannels
            }
            arrAuthors={currentChannel.arrAuthors}
            arrAllClassificators={currentChannel.arrAllClassificators}
            posts={currentChannel.posts}
          />
        // ))
        }

      {Channels.isLoading && <SkeletCard />}

      {Channels.channelsArr.length === 0 && !Channels.isLoading && (
        <NotFoundIcon text={"У вас нет действующих каналов"} width={"568px"} />
      )}
    </div>
  );
}

export default observer(MainZoneChannels);
