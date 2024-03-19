import { observer } from "mobx-react-lite";
import styles from "../../style.module.css";
import AutorElement from "./AutorElement";
import { useEffect } from "react";
import popularAutors from "../../store/popularAutors";
import AuthorSkelet from "./AuthorSkelet";

function PopularAutors() {
  useEffect(() => {
    if (popularAutors.popularAutors.length === 0) {
      popularAutors.isLoading = true;
    }
    popularAutors.getPopularAutors();
  }, []);

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
      {!popularAutors.isLoading &&
        popularAutors.popularAutors.map((user) => (
          <AutorElement
            key={user.user_id}
            user_id={user.user_id}
            username={user.username}
            followers={user.followers}
          />
        ))}
      {popularAutors.isLoading && (
        <>
          <AuthorSkelet />
          <AuthorSkelet />
          <AuthorSkelet />
          <AuthorSkelet />
        </>
      )}
    </div>
  );
}

export default observer(PopularAutors);
