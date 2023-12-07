import MainZone from "./MainZone/MainZone";
import RightZone from "./RightZone/RightZone";
import style from "../style.module.css";

function MainPage() {
  return (
    <div className={style.MainPage}>
      <MainZone />
      <RightZone />
    </div>
  );
}

export default MainPage;
