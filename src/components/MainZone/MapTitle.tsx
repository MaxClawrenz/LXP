import styles from "../../style.module.css";

function MapTitle({ name }: { name: string }) {
  return <div className={styles.mapTitleWindow}>{name}</div>;
}

export default MapTitle;
