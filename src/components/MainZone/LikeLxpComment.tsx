import { observer } from "mobx-react-lite";
import { useState } from "react";
import news from "../../store/news";
import styles from "../../style.module.css";
import LikeIcon from "./MainIcons/LikeIcon";
import LikeIconActive from "./MainIcons/LikeIconActive";
import postBody from "../../store/postBody";
import Channels from "../../store/MainZoneChannels";
import { CommentLxp } from "../../interfaces/CommentLxp";
import { MouseEvent } from "react";

function LikeLxpComment(props: CommentLxp) {
  const [likeClass, setLikeClass] = useState<string | undefined>(props.class);
  const [likesCount, setLikesCount] = useState(props.likes_count);

  const handleLikeClick = async (
    postId: string,
    event: MouseEvent<HTMLDivElement>
  ) => {
    try {
      news.getLike(postId, event);
      if (likeClass === "live_post_yes") {
        setLikeClass(undefined);
        setLikesCount(likesCount - 1);
      } else {
        setLikeClass("live_post_yes");
        setLikesCount(likesCount + 1);
      }
    } catch (error) {
      console.error("Ошибка при обработке лайка:", error);
    }
  };

  return (
    <div className={styles.bottomZone}>
      <div
        className={styles.likesCount}
        onClick={(event) => handleLikeClick(props.id, event)}
      >
        {likeClass !== "live_post_yes" && <LikeIcon />}
        {likeClass === "live_post_yes" && <LikeIconActive />}
        {likesCount !== 0 ? (
          <>
            {!likeClass && (
              <span className={styles.numberCount}>{likesCount}</span>
            )}
            {likeClass === "live_post_yes" && (
              <span className={styles.numberCount_active}>{likesCount}</span>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default observer(LikeLxpComment);
