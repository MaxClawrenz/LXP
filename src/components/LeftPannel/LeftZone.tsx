import ChannelsLeftMenu from "./Channels/ChannelsLeftMenu";
import TabLeftMenu from "./Tabs/TabLeftMenu";
import styles from "../../style.module.css";

function LeftZone() {
  return (
    <div className={styles.LeftZone}>
      <div className={styles.TabMenu}>
        <TabLeftMenu />
      </div>
      <div className="LastChannels">
        <ChannelsLeftMenu />
      </div>
    </div>
  );
}

export default LeftZone;
