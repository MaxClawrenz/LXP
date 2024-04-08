import { useEffect } from "react";
import useTimeName from "../../hooks/useTimeName";
import style from "../../style.module.css";
import postBody from "../../store/postBody";
import CommentForm from "./CommentForm";

function CommentsZone({
  comments_count,
  id,
}: {
  comments_count: number;
  id: string;
}) {
  const commentsName = useTimeName(comments_count, [
    "комментарий",
    "комментария",
    "комментариев",
  ]);

  useEffect(() => {
    postBody.isLoadingComments = true;
    postBody.getPostComment(id);
  }, []);

  return (
    <div className={style.CommentsZone}>
      <div className={style.commentsName}>
        {!postBody.isLoadingComments
          ? `${comments_count} ${commentsName}`
          : "Loading..."}
      </div>
      <CommentForm />
    </div>
  );
}

export default CommentsZone;
