import { useState } from "react";
import { IPostCard } from "../../interfaces/IPostCard";
import styles from "../../style.module.css";
import CommentIcon from "./MainIcons/CommentIcon";
import FavouriteIcon from "./MainIcons/FavouriteIcon";
import LikeIcon from "./MainIcons/LikeIcon";
import React from "react";
import news from "../../store/news";
import LikeIconActive from "./MainIcons/LikeIconActive";
import FavouriteIconActive from "./MainIcons/FavouriteIconActive";
import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import MapIcon from "./MainIcons/MapIcon";
import { Link } from "react-router-dom";
import MapTitle from "./MapTitle";
import FollowIcon from "./MainIcons/FollowIcon";
import { motion, AnimatePresence } from "framer-motion";
import { observer } from "mobx-react-lite";
import popularAutors from "../../store/popularAutors";

function PostCard(props: IPostCard) {
  const { hours, minutes } = useTime(props.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);
  const [mapShow, setMapShow] = useState<boolean>(false);

  function handleMapWindow(event: React.MouseEvent<HTMLDivElement>) {
    setMapShow(!mapShow);
  }

  function makeFollow() {
    news.blogFollow(props.blog_id);
    //popularAutors.getPopularAutors();
  }

  return (
    <div className={styles.PostCard}>
      <div className={styles.topZone}>
        <div className={styles.cardHeader}>
          <div className={styles.leftHeader}>
            <Link to={`/_wt/eqvatoria_lxp_channels/${props.channel_id}`}>
              <div className={styles.channelBlock}>
                <img
                  className={styles.channelPict}
                  src={props.channel_pict}
                  alt="Картинка канала"
                />
                <div className={styles.channelName}>{props.channel_name}</div>
              </div>
            </Link>
            <div onClick={handleMapWindow} className={styles.cardKnowledge}>
              <MapIcon />
              <AnimatePresence>
                {mapShow && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    <MapTitle name={props.knowledge_name} />
                  </motion.div>
                )}
              </AnimatePresence>
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
            {!props.is_follow && !props.is_my_blog && (
              <div onClick={makeFollow} className={styles.buttonSubscribe}>
                + Подписаться
              </div>
            )}
            {props.is_follow && !props.is_my_blog && (
              <div onClick={makeFollow} className={styles.buttonSubscribe}>
                <FollowIcon />
              </div>
            )}
          </div>
        </div>
        <div className={styles.cardTitle}>{props.post_name}</div>
        <div className={styles.cardDesc}>{props.post_text}</div>
      </div>
      <div className={styles.bottomZone}>
        <div
          className={styles.likesCount}
          onClick={() => {
            news.getLike(props.id);
          }}
        >
          {!props.my_like && <LikeIcon />}
          {props.my_like && <LikeIconActive />}
          {!props.my_like && (
            <span className={styles.numberCount}>{props.likes_count}</span>
          )}
          {props.my_like && (
            <span className={styles.numberCount_active}>
              {props.likes_count}
            </span>
          )}
        </div>
        <div className={styles.commentsCount}>
          <CommentIcon />
          <span className={styles.numberCount}>{props.comments_count}</span>
        </div>
        <div
          className={styles.favouriteCount}
          onClick={() => {
            news.getFavourites(props.id);
          }}
        >
          {!props.my_favourite && <FavouriteIcon />}
          {props.my_favourite && <FavouriteIconActive />}
          {!props.my_favourite && (
            <span className={styles.numberCount}>{props.favourite_count}</span>
          )}
          {props.my_favourite && (
            <span className={styles.numberCount_favourite_active}>
              {props.favourite_count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(observer(PostCard));
