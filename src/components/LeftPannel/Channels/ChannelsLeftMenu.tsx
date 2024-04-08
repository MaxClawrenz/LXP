import ChannelElement from "./ChannelElement";
import styles from "../../../style.module.css";
import { observer } from "mobx-react-lite";
import visitedChannels from "../../../store/visitedChannels";

function ChannelsLeftMenu() {
  return (
    <ul className={styles.ChannelsLeftMenu}>
      {visitedChannels.channelsArr.map((channel) => (
        <ChannelElement
          name={channel.name}
          pict_id={channel.pict_id}
          channel_id={channel.channel_id}
          count={channel.count}
        />
      ))}
    </ul>
  );
}

export default observer(ChannelsLeftMenu);
