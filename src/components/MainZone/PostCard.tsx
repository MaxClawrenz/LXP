import { memo, useEffect, useState } from "react";
import { IPostCard } from "../../interfaces/IPostCard";
import styles from "../../style.module.css";
import CommentIcon from "./MainIcons/CommentIcon";
import FavouriteIcon from "./MainIcons/FavouriteIcon";
import LikeIcon from "./MainIcons/LikeIcon";
import React from "react";
import news from "../../store/news";
import { observer } from "mobx-react-lite";
import LikeIconActive from "./MainIcons/LikeIconActive";
import FavouriteIconActive from "./MainIcons/FavouriteIconActive";

function PostCard(props: IPostCard) {

  return (
    <div className={styles.PostCard}>
      <div className={styles.topZone}>
        <div className={styles.cardHeader}>
          <div className={styles.leftHeader}>
            <div className={styles.channelBlock}>
              <img
                className={styles.channelPict}
                src={props.channel_pict}
                alt=""
              />
              <div className={styles.channelName}>{props.channel_name}</div>
            </div>
            <div className={styles.cardKnowledge}>{props.knowledge_name}</div>
            <div className={styles.cardTime}>{props.time_posted}</div>
          </div>
          <div>
            {!props.is_follow && (
              <button className={styles.buttonSubscribe}>+ Подписаться</button>
            )}
            {props.is_follow && (
              <button className={styles.buttonSubscribe}>- Отписаться</button>
            )}
          </div>
        </div>
        <div className={styles.cardTitle}>{props.post_name}</div>
        <div className={styles.cardDesc}>{props.post_text}</div>
      </div>
      <div className={styles.bottomZone}>
        <div className={styles.likesCount} onClick={()=>{news.getLike(props.id)}}>
          {!props.my_like && <LikeIcon />}
          {props.my_like && <LikeIconActive/>}
          {!props.my_like &&<span className={styles.numberCount}>{props.likes_count}</span>}
          {props.my_like &&<span className={styles.numberCount_active}>{props.likes_count}</span>}
        </div>
        <div className={styles.commentsCount}>
          <CommentIcon />
          <span className={styles.numberCount}>{props.comments_count}</span>
        </div>
        <div className={styles.favouriteCount} onClick={()=>{news.getFavourites(props.id)}}>
          {!props.my_favourite && <FavouriteIcon />}
          {props.my_favourite &&<FavouriteIconActive />}
          {!props.my_favourite &&<span className={styles.numberCount}>{props.favourite_count}</span>}
          {props.my_favourite &&<span className={styles.numberCount_favourite_active}>{props.favourite_count}</span>}
        </div>
      </div>
    </div>
  );
}

export default  React.memo(PostCard);
