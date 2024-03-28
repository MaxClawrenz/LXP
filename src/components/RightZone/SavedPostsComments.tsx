import { useEffect } from "react";
import style from "../../style.module.css";
import { observer } from "mobx-react-lite";
import comments from "../../store/comments";
import CommentElement from "./CommentElement";
import UniversalSkelet from "../MainZone/UniversalSkelet";

function SavedPostsComments() {
  useEffect(() => {
    if (comments.allComments.length === 0) {
      comments.isLoading = true;
    }
    comments.getAllComments();
  }, []);

  return (
    <div className={style.PopularAutors}>
      <div className={style.CommentsHeader}>Комментарии</div>
      {!comments.isLoading &&
        comments.allComments.length > 0 &&
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
      {!comments.isLoading && comments.allComments.length === 0 && (
        <div className={style.no_comments}>Нет комментариев</div>
      )}
      {comments.isLoading && (
        <div className={style.comment_element}>
          <div className={style.comment_header}>
            <div className={style.comment_header_left}>
              <UniversalSkelet
                width={"20px"}
                height={"20px"}
                marginTop={"0px"}
                marginBottom={"0"}
                marginLeft={"0"}
                marginRight={"8px"}
                paddingTop={"0"}
                paddingBottom={"0"}
                paddingLeft={"0"}
                paddingRight={"0"}
                borderRadius={"4px"}
              />
              <UniversalSkelet
                width={"120px"}
                height={"17px"}
                marginTop={"0px"}
                marginBottom={"0"}
                marginLeft={"0"}
                marginRight={"0"}
                paddingTop={"0"}
                paddingBottom={"0"}
                paddingLeft={"0"}
                paddingRight={"0"}
                borderRadius={"4px"}
              />
            </div>
            <UniversalSkelet
              width={"70px"}
              height={"17px"}
              marginTop={"0px"}
              marginBottom={"0"}
              marginLeft={"0"}
              marginRight={"0"}
              paddingTop={"0"}
              paddingBottom={"0"}
              paddingLeft={"0"}
              paddingRight={"0"}
              borderRadius={"4px"}
            />
          </div>
          <UniversalSkelet
            width={"100%"}
            height={"14px"}
            marginTop={"8px"}
            marginBottom={"8px"}
            marginLeft={"0"}
            marginRight={"0"}
            paddingTop={"0"}
            paddingBottom={"0"}
            paddingLeft={"0"}
            paddingRight={"0"}
            borderRadius={"4px"}
          />
          <UniversalSkelet
            width={"100%"}
            height={"14px"}
            marginTop={"8px"}
            marginBottom={"8px"}
            marginLeft={"0"}
            marginRight={"0"}
            paddingTop={"0"}
            paddingBottom={"0"}
            paddingLeft={"0"}
            paddingRight={"0"}
            borderRadius={"4px"}
          />
          <UniversalSkelet
            width={"100%"}
            height={"14px"}
            marginTop={"8px"}
            marginBottom={"8px"}
            marginLeft={"0"}
            marginRight={"0"}
            paddingTop={"0"}
            paddingBottom={"0"}
            paddingLeft={"0"}
            paddingRight={"0"}
            borderRadius={"4px"}
          />
        </div>
      )}
    </div>
  );
}

export default observer(SavedPostsComments);
