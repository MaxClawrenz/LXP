// import TabElement from "./TabElement";
import ChannelsIcon from "./TabsIcons/ChannelsIcon";
import NewsIcon from "./TabsIcons/NewsIcon";
import PopularIcon from "./TabsIcons/PopularIcon";
import SavedIcon from "./TabsIcons/SavedIcon";
import SubscribesIcon from "./TabsIcons/SubscribesIcon";
import styles from "../../../style.module.css";
import { Link, Route } from "react-router-dom";
import TabRoute from "./TabRouteComponent";

function TabLeftMenu() {
  return (
    <ul className={styles.TabMenu}>
      <Link to="/_wt/lxp">
        <TabRoute name="Свежее">
          <NewsIcon />
        </TabRoute>
      </Link>

      <Link to="/_wt/eqvatoria_lxp_popular">
        {" "}
        <TabRoute name="Популярное">
          <PopularIcon />
        </TabRoute>
      </Link>
      <Link to="/_wt/eqvatoria_lxp_subscribes">
        {" "}
        <TabRoute name="Подписки">
          <SubscribesIcon />
        </TabRoute>
      </Link>
      <Link to="/_wt/eqvatoria_lxp_channels">
        {" "}
        <TabRoute name="Каналы">
          <ChannelsIcon />
        </TabRoute>
      </Link>
      <Link to="/_wt/lxp_saved">
        {" "}
        <TabRoute name="Сохранённое">
          <SavedIcon />
        </TabRoute>
      </Link>
    </ul>
  );
}

export default TabLeftMenu;
