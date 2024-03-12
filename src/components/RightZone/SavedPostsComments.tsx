import { useEffect } from "react";
import style from "../../style.module.css";
import { observer } from "mobx-react-lite";
import comments from "../../store/comments";
import CommentElement from "./CommentElement";

function SavedPostsComments() {
  useEffect(() => {
    if (comments.allComments.length === 0) {
      comments.isLoading = true;
      comments.getAllComments();
    } else {
      comments.getAllComments();
    }
  }, []);

  return (
    <div className={style.PopularAutors}>
      <div className={style.CommentsHeader}>Комментарии</div>
      {!comments.isLoading &&
        comments.allComments.map((comment) => (
          <CommentElement
            key={comment.person_id}
            person_id={comment.person_id}
            person_fullname={comment.person_fullname}
            time_posted={comment.time_posted}
            message={comment.message}
            post_name={comment.post_name}
            comment_id={comment.comment_id}
            create_date={comment.create_date}
          />
        ))}
      {comments.isLoading && <div>Loading...</div>}
    </div>
  );
}

export default observer(SavedPostsComments);
