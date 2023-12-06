import TabElement from "./TabElement";
import ChannelsIcon from "./TabsIcons/ChannelsIcon";
import NewsIcon from "./TabsIcons/NewsIcon";
import PopularIcon from "./TabsIcons/PopularIcon";
import SavedIcon from "./TabsIcons/SavedIcon";
import SubscribesIcon from "./TabsIcons/SubscribesIcon";
import styles from "../../../style.module.css";

function TabLeftMenu() {
  return (
    <ul className={styles.TabMenu}>
      <TabElement name="Свежее">
        <NewsIcon />
      </TabElement>
      <TabElement name="Популярное">
        <PopularIcon />
      </TabElement>
      <TabElement name="Подписки">
        <SubscribesIcon />
      </TabElement>
      <TabElement name="Каналы">
        <ChannelsIcon />
      </TabElement>
      <TabElement name="Сохранённое">
        <SavedIcon />
      </TabElement>
    </ul>
  );
}

export default TabLeftMenu;
