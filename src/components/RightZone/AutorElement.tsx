import { IAutor } from "../../interfaces/IAutor";
import styles from "../../style.module.css";

function AutorElement(props: IAutor) {
  return (
    <div className={styles.AutorElement}>
      <div className={styles.AutorLeft}>
        <img className={styles.AutorPict} src={props.pict_url} alt="" />
        <span className={styles.AutorName}>{props.fio}</span>
      </div>
      <span className={styles.AutorRate}>{props.rating}</span>
    </div>
  );
}

export default AutorElement;
