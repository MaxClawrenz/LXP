import { IMainZoneChannels } from '../../interfaces/IMainZoneChannels';
import MyChannel from './MyChannel';
import Channels from "../../store/MainZoneChannels";
import { observer } from "mobx-react-lite";
import { useEffect } from 'react';

function MainZoneChannels() {
  useEffect(() => {
    Channels.getChannels();
  }, []);

  return (
    <div className="MainZone">
      {Channels.channelsArr.slice(0, 1).map((channel) => (
        // Отрисовываем компонент только для первого элемента в массиве
          <MyChannel 
          key={channel.channelId}
          channelId={channel.channelId}
          channelName={channel.channelName}
          authorID={channel.authorID}
          channelDecript={channel.channelDecript}
          avatarChannelID={channel.avatarChannelID}
          coverChannelID={channel.coverChannelID}
          arrPostsInChannel={channel.arrPostsInChannel}
          arrSubscriptionsInChannel={channel.arrSubscriptionsInChannel}
          arrKnowlegesParts={channel.arrKnowlegesParts}
          arrTags={channel.arrTags}
          authorFullname={channel.authorFullname}
          arrComments={channel.arrComments} 
          arrCountSubscriptionsChannels={channel.arrCountSubscriptionsChannels}
          />
      ))}
    </div>
  );
}

export default observer(MainZoneChannels);