import RightZone from "./RightZone/RightZone";
import style from "../style.module.css";
import MySubscribes from "./MainZone/MySubscribes";

function SubscribesPage() {
  return (
    <div className={style.MainPage}>
      <MySubscribes />
      <RightZone />
    </div>
  );
}

export default SubscribesPage;
