import { useState } from "react";
import { IPostCard } from "../../interfaces/IPostCard";
import styles from "../../style.module.css";
import React from "react";
import news from "../../store/news";
import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import MapIcon from "./MainIcons/MapIcon";
import { Link } from "react-router-dom";
import MapTitle from "./MapTitle";
import FollowIcon from "./MainIcons/FollowIcon";
import { motion, AnimatePresence } from "framer-motion";
import { observer } from "mobx-react-lite";
import popularAutors from "../../store/popularAutors";
import MapIconOpened from "./MainIcons/MapIconOpened";
import PostFooter from "./PostFooter";

function PostCard(props: IPostCard) {
  const { hours, minutes } = useTime(props.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);
  const [mapShow, setMapShow] = useState<boolean>(false);

  function handleMapWindow(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setMapShow(!mapShow);
  }

  async function makeFollow(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    await news.blogFollow(props.blog_id);
    popularAutors.getPopularAutors();
  }

  return (
    <AnimatePresence>
      <Link to={`/_wt/lxp_post/${props.id}`}>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ minHeight: "272px", height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ overflow: "hidden" }}
          className={styles.PostCard}
        >
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
                    <div className={styles.channelName}>
                      {props.channel_name}
                    </div>
                  </div>
                </Link>
                <div onClick={handleMapWindow} className={styles.cardKnowledge}>
                  {!mapShow && <MapIcon />}
                  {mapShow && <MapIconOpened />}
                  <AnimatePresence>
                    {mapShow && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
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
            {props.file_id && (
              <div className={styles.postImgBlock}>
                <img
                  className={styles.postImg}
                  src={`/download_file.html?file_id=${props.file_id}`}
                  alt="Вложение к посту"
                />
              </div>
            )}
          </div>
          <PostFooter
            id={props.id}
            my_like={props.my_like}
            likes_count={props.likes_count}
            comments_count={props.comments_count}
            my_favourite={props.my_favourite}
            favourite_count={props.favourite_count}
          />
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}

export default React.memo(observer(PostCard));
