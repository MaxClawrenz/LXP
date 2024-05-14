import { useEffect, useState } from "react";
import useTimeName from "../../hooks/useTimeName";
import style from "../../style.module.css";
import postBody from "../../store/postBody";
import CommentForm from "./CommentForm";
import UniversalSkelet from "./UniversalSkelet";
import CommentsLxp from "./CommentsLxp";
import { observer } from "mobx-react-lite";
import CommentSkeletLxp from "./CommentSkeletLxp";

function CommentsZone({
  comments_count,
  id,
  blog_id,
}: {
  comments_count: number;
  id: string;
  blog_id: string;
}) {
  const commentsName = useTimeName(comments_count, [
    "комментарий",
    "комментария",
    "комментариев",
  ]);

  useEffect(() => {
    if (id) {
      postBody.getPostComment(id);
    }
  }, [id]);

  const updateCommentsCount = (newCount: number) => {
    postBody.setCommentsCount(newCount);
  };
  return (
    <div className={style.CommentsZone}>
      <div className={style.commentsName}>
        {!postBody.isLoadingComments ? (
          `${postBody.commentsCount} ${commentsName}`
        ) : (
          <UniversalSkelet
            width={"155px"}
            height={"23px"}
            marginTop={"0"}
            marginBottom={"0"}
            marginLeft={"0"}
            marginRight={"0"}
            paddingTop={"0"}
            paddingBottom={"0"}
            paddingLeft={"0"}
            paddingRight={"0"}
            borderRadius={"4px"}
          />
        )}
      </div>
      <CommentForm blog_id={id} updateCommentsCount={updateCommentsCount} />
      <div id={style.lxp_comment_block}>
        {postBody.isNewCommentLoading && <CommentSkeletLxp />}
        {!postBody.isLoadingComments ? (
          postBody.postComments.allComments.map((comment) => (
            <CommentsLxp
              key={comment.id}
              date={comment.date}
              id={comment.id}
              person_id={comment.person_id}
              fio={comment.fio}
              self={comment.self}
              message={comment.message}
              file_ids={comment.file_ids}
              childrenArr={comment.childrenArr}
              class={comment.class}
              date2={comment.date2}
              likes_count={comment.likes_count}
              blog_id={id}
              updateCommentsCount={updateCommentsCount}
              parent_comment_id={""}
              fio_parent={""}
            />
          ))
        ) : (
          <CommentSkeletLxp />
        )}
      </div>
    </div>
  );
}

export default observer(CommentsZone);
