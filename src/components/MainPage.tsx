import LeftZone from "./LeftPannel/LeftZone";
import MainZone from "./MainZone/MainZone";
import RightZone from "./RightZone/RightZone";
import style from "../style.module.css";

function MainPage() {
  return (
    <div className={style.MainPage}>
      <LeftZone />
      <MainZone />
      <RightZone />
    </div>
  );
}

export default MainPage;
