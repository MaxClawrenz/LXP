import RightZone from "./RightZone/RightZone";
import style from "../style.module.css";
import MainSaved from "./MainZone/MainSaved";

function SavedPage() {
  return (
    <div className={style.MainPage}>
      <MainSaved />
      <RightZone />
    </div>
  );
}

export default SavedPage;
