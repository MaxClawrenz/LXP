import { observer } from "mobx-react-lite";
import { IPostFooter } from "../../interfaces/IPostFooter";
import news from "../../store/news";
import styles from "../../style.module.css";
import CommentIcon from "./MainIcons/CommentIcon";
import FavouriteIcon from "./MainIcons/FavouriteIcon";
import FavouriteIconActive from "./MainIcons/FavouriteIconActive";
import LikeIcon from "./MainIcons/LikeIcon";
import LikeIconActive from "./MainIcons/LikeIconActive";
import postBody from "../../store/postBody";
import comments from "../../store/comments";

function PostFooter(props: IPostFooter) {
  return (
    <div className={styles.bottomZone}>
      <div
        className={styles.likesCount}
        onClick={(event) => {
          news.getLike(props.id, event);
          postBody.updateLikes();
        }}
      >
        {!props.my_like && <LikeIcon />}
        {props.my_like && <LikeIconActive />}
        {!props.my_like && (
          <span className={styles.numberCount}>{props.likes_count}</span>
        )}
        {props.my_like && (
          <span className={styles.numberCount_active}>{props.likes_count}</span>
        )}
      </div>
      <div className={styles.commentsCount}>
        <CommentIcon />
        <span className={styles.numberCount}>{props.comments_count}</span>
      </div>
      <div
        className={styles.favouriteCount}
        onClick={(event) => {
          news.getFavourites(props.id, props.my_favourite, event);
          postBody.updateFavorites();
          comments.getAllComments();
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
  );
}

export default observer(PostFooter);
