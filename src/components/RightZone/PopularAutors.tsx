import styles from "../../style.module.css";

function PopularAutors() {
  return (
    <div className={styles.PopularAutors}>
      <div className={styles.PopularAutorsHeader}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M1 17V17C1 13.134 4.13401 10 8 10H10C13.866 10 17 13.134 17 17V17"
            stroke="#151D2D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="9" cy="4" r="3" stroke="#151D2D" strokeWidth="2" />
        </svg>
        Популярные авторы
      </div>
    </div>
  );
}

export default PopularAutors;
