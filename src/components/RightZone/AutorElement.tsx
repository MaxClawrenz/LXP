import { IAutor } from "../../interfaces/IAutor";
import styles from "../../style.module.css";

function AutorElement(props: IAutor) {
  return (
    <div className={styles.AutorElement}>
      <div className={styles.AutorLeft}>
        <a
          href={`/_wt/${props.user_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.AutorPict}
            src={`/person_icon.html?id=${props.user_id}&type=150x150`}
            alt=""
          />
        </a>
        <a
          className={styles.AutorName}
          href={`/_wt/${props.user_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.AutorName}>{props.username}</span>
        </a>
      </div>
      <span className={styles.AutorRate}>{props.followers}</span>
    </div>
  );
}

export default AutorElement;
