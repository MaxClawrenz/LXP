import { IAutor } from "../../interfaces/IAutor";
import styles from "../../style.module.css";

function AutorElement(props: IAutor) {
  return (
    <div className={styles.AutorElement}>
      <div className={styles.AutorLeft}>
        <img
          className={styles.AutorPict}
          src={`/person_icon.html?id=${props.user_id}&type=150x150`}
          alt=""
        />
        <span className={styles.AutorName}>{props.username}</span>
      </div>
      <span className={styles.AutorRate}>{props.followers}</span>
    </div>
  );
}

export default AutorElement;
