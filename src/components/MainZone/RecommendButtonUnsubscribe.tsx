import style from "../../style.module.css";
import popularAutors from "../../store/popularAutors";
import mySubscriptions from "../../store/mySubscriptions";
import news from "../../store/news";
import FollowedIconMini from "./MainIcons/FollowedIconMini";
import { useState } from "react";
import UnfollowedIconMini from "./MainIcons/UnfollowedIconMini";
import { observer } from "mobx-react-lite";

function RecommendButtonUnsubscribe({
  channel_id,
  setFollow,
}: {
  channel_id: string;
  setFollow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isOver, setOver] = useState(false);

  function handleOver() {
    setOver(true);
  }

  function handleOut() {
    setOver(false);
  }

  async function handleUnfollow() {
    setFollow((prev) => !prev);
    mySubscriptions.unfollow(channel_id);
    await news.blogFollow(channel_id);
    popularAutors.getPopularAutors();
  }
  return (
    <button
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      onClick={handleUnfollow}
      className={style.button_unsubscribe}
    >
      <div className={style.block_button_icon_unsubscribe}>
        {!isOver ? <FollowedIconMini /> : <UnfollowedIconMini />}
      </div>
      <div>{!isOver ? "Подписан" : "Отписаться"}</div>
    </button>
  );
}

export default observer(RecommendButtonUnsubscribe);
