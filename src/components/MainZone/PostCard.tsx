import { memo } from "react";
import { IPostCard } from "../../interfaces/IPostCard";
import styles from "../../style.module.css";
import CommentIcon from "./MainIcons/CommentIcon";
import FavouriteIcon from "./MainIcons/FavouriteIcon";
import LikeIcon from "./MainIcons/LikeIcon";
import React from "react";
import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import MapIcon from "./MainIcons/MapIcon";

function PostCard(props: IPostCard) {
  const { hours, minutes } = useTime(props.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);

  return (
    <div className={styles.PostCard}>
      <div className={styles.topZone}>
        <div className={styles.cardHeader}>
          <div className={styles.leftHeader}>
            <div className={styles.channelBlock}>
              <img
                className={styles.channelPict}
                src={props.channel_pict}
                alt="Картинка канала"
              />
              <div className={styles.channelName}>{props.channel_name}</div>
            </div>
            <div className={styles.cardKnowledge}>
              <MapIcon />
              {/* {props.knowledge_name} */}
            </div>
            <div className={styles.cardTime}>
              {hours > 24
                ? props.create_date
                : hours < 24 && hours
                ? `${hours} ${hoursName}`
                : minutes
                ? `${minutes} ${minutesName}`
                : "1 минута"}
            </div>
          </div>
          <div>
            {!props.is_follow && (
              <div className={styles.buttonSubscribe}>+ Подписаться</div>
            )}
            {props.is_follow && (
              <div className={styles.buttonSubscribe}>- Отписаться</div>
            )}
          </div>
        </div>
        <div className={styles.cardTitle}>{props.post_name}</div>
        <div className={styles.cardDesc}>{props.post_text}</div>
      </div>
      <div className={styles.bottomZone}>
        <div className={styles.likesCount}>
          <LikeIcon />
          <span className={styles.numberCount}>{props.likes_count}</span>
        </div>
        <div className={styles.commentsCount}>
          <CommentIcon />
          <span className={styles.numberCount}>{props.comments_count}</span>
        </div>
        <div className={styles.favouriteCount}>
          <FavouriteIcon />
          <span className={styles.numberCount}>{props.favourite_count}</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PostCard);
