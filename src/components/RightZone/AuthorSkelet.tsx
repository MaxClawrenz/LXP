import styles from "../../style.module.css";

function AuthorSkelet() {
  return (
    <div className={styles.AutorElement}>
      <div className={styles.AutorLeft}>
        <div className={styles.AutorPictSkelet}></div>
        <div className={styles.AutorNameSkelet}></div>
      </div>
    </div>
  );
}

export default AuthorSkelet;
