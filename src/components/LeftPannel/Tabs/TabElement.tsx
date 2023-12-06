import { ITabElement } from "../../../interfaces/ITabElement";
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
