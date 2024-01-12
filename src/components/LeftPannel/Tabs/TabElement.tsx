import { ITabElement } from "../../../interfaces/ITabElement";
import tabNavigation from "../../../store/tabNavigation";
import styles from "../../../style.module.css";
import { observer } from "mobx-react-lite";

function TabElement(props: ITabElement) {
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
      {props.children}
      {props.name}
    </li>
  );
}

export default observer(TabElement);
