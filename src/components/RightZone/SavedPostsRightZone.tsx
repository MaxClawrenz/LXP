import style from "../../style.module.css";
import SavedPostsComments from "./SavedPostsComments";

function SavedPostsRightZone() {
  return (
    <div className={style.RightZone}>
      <SavedPostsComments />
    </div>
  );
}

export default SavedPostsRightZone;
