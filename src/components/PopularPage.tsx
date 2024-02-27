import RightZone from "./RightZone/RightZone";
import style from "../style.module.css";
import MainSaved from "./MainZone/MainSaved";
import MainPopular from "./MainZone/MainPopular";

function PopularPage() {
  return (
    <div className={style.MainPage}>
      <MainPopular />
      <RightZone />
    </div>
  );
}

export default PopularPage;
