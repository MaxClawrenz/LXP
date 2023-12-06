import ChannelsLeftMenu from "./Channels/ChannelsLeftMenu";
import TabLeftMenu from "./Tabs/TabLeftMenu";

function LeftZone() {
  return (
    <div className="LeftZone">
      <div className="TabMenu">
        <TabLeftMenu />
      </div>
      <div className="LastChannels">
        <ChannelsLeftMenu />
      </div>
    </div>
  );
}

export default LeftZone;
