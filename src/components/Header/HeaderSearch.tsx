import { ChangeEvent, useState } from "react";
import styles from "../../style.module.css";
import { observer } from "mobx-react-lite";
import news from "../../store/news";

function HeaderSearch() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    news.searchString = e.target.value;
    news.findText();
  }

  return (
    <input
      value={news.searchString}
      onChange={handleChange}
      className={styles.HeaderSearch}
      placeholder="Поиск"
      type="text"
    />
  );
}

export default observer(HeaderSearch);
