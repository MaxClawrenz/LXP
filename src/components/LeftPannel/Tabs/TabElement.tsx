import { ITabElement } from "../../../interfaces/ITabElement";
import news from "../../../store/news";
import styles from "../../../style.module.css";

function TabElement(props: ITabElement) {
  return (
    <li className={styles.TabElement}>
      {props.children}
      {props.name}
    </li>
  );
}

export default TabElement;
