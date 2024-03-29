import FollowIconMini from "./MainIcons/FollowIconMini";
import style from "../../style.module.css";
import news from "../../store/news";
import popularAutors from "../../store/popularAutors";
import mySubscriptions from "../../store/mySubscriptions";
import { observer } from "mobx-react-lite";

function RecommendButtonSubscribe({
  channel_id,
  setFollow,
}: {
  channel_id: string;
  setFollow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  async function handleFollow() {
    setFollow((prev) => !prev);
    await news.blogFollow(channel_id);
    popularAutors.getPopularAutors();
    //mySubscriptions.getMySubscriptions();
    //mySubscriptions.getRecommendChannels();
  }
  return (
    <button onClick={handleFollow} className={style.button_subscribe}>
      <div className={style.block_button_icon}>
        <FollowIconMini />
      </div>
      <div>Подписаться</div>
    </button>
  );
}

export default observer(RecommendButtonSubscribe);
