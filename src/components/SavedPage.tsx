import style from "../style.module.css";
import MainSaved from "./MainZone/MainSaved";
import SavedPostsRightZone from "./RightZone/SavedPostsRightZone";

function SavedPage() {
  return (
    <div className={style.MainPage}>
      <MainSaved />
      <SavedPostsRightZone />
    </div>
  );
}

export default SavedPage;
