import { useEffect } from "react";
import useTimeName from "../../hooks/useTimeName";
import style from "../../style.module.css";
import postBody from "../../store/postBody";
import CommentForm from "./CommentForm";
import UniversalSkelet from "./UniversalSkelet";

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
    if (id) {
      postBody.isLoadingComments = true;
      postBody.getPostComment(id);
    }
  }, [id]);

  return (
    <div className={style.CommentsZone}>
      <div className={style.commentsName}>
        {!postBody.isLoadingComments ? (
          `${comments_count} ${commentsName}`
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
      <CommentForm />
    </div>
  );
}

export default CommentsZone;
