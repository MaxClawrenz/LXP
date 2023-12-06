import styles from "../../style.module.css";

function HeaderSearch() {
  return (
    <input className={styles.HeaderSearch} placeholder="Поиск" type="text" />
  );
}

export default HeaderSearch;
