import { useLocation } from "react-router-dom";
import { ITabElement } from "../../../interfaces/ITabElement";
import tabNavigation from "../../../store/tabNavigation";
import styles from "../../../style.module.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import news from "../../../store/news";
import { style } from "@mui/system";

function TabElement(props: ITabElement) {
  const location = useLocation();

  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const tab_name = pathArr[pathArr.length - 1];

    switch (tab_name) {
      case "lxp":
        tabNavigation.navigatorUpdate("Свежее");
        break;
      case "lxp_popular":
        tabNavigation.navigatorUpdate("Популярное");
        break;
      case "lxp_subscribes":
        tabNavigation.navigatorUpdate("Подписки");
        break;
      case "lxp_channels":
        tabNavigation.navigatorUpdate("Каналы");
        break;
      case "lxp_saved":
        tabNavigation.navigatorUpdate("Сохранённое");
        break;

      default:
        tabNavigation.navigatorUpdate("Свежее");
        break;
    }
  }, []);

  return (
    <li
      onClick={() => {
        tabNavigation.navigatorUpdate(props.name);
      }}
      className={
        tabNavigation.navigator[props.name]
          ? styles.TabElementSelected
          : styles.TabElement
      }
    >
      <div className={styles.navigatorLeftZone}>
        {props.children}
        {props.name}
      </div>
      {props.name === "Свежее" && news.veryNewPostsCounter > 0 ? (
        <div className={styles.freshPoint}></div>
      ) : null}
    </li>
  );
}

export default observer(TabElement);
