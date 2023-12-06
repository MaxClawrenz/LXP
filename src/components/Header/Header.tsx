import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderLogo/HeaderIcon";
import HeaderTitle from "./HeaderLogo/HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import styles from "../../style.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeft}>
        <HeaderIcon />
        <HeaderTitle />
      </div>
      <HeaderSearch />
      <HeaderButton />
    </div>
  );
}

export default Header;
