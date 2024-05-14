import axios from "axios";
import postBody from "../../store/postBody";
import { observer } from "mobx-react-lite";
import style from "../../style.module.css";

function ComentDeletingLxp(props: any) {
  function handleNo() {
    props.setDeletingComment(false);
  }

  async function handleYes() {
    try {
      const response = await axios.get(
        "/custom_web_template.html?object_code=delete_comment_ribbon_react",
        { params: { comment_id: props.id } }
      );

      // Удаление комментария из массива
      const updatedComments = postBody.postComments.allComments.filter(
        (comment) => comment.id !== props.id
      );

      // Проверяем наличие ответов
      const deletedComment = postBody.postComments.allComments.find(
        (comment) => comment.id === props.id
      );
      if (deletedComment && deletedComment.childrenArr.length > 0) {
        deletedComment.childrenArr.forEach(async (reply) => {
          try {
            // Отправляем запрос на удаление ответа
            const response = await axios.get(
              "/custom_web_template.html?object_code=delete_comment_ribbon_react",
              { params: { comment_id: reply.id } }
            );

            postBody.setCommentsCount(postBody.commentsCount - 1);
          } catch (error) {
            console.log("Ошибка при удалении ответа:", reply.id, error);
          }
        });
      }

      postBody.postComments.allComments = updatedComments; // Обновляем массив комментариев

      props.setDeletingComment(false);
      postBody.setCommentsCount(postBody.commentsCount - 1);
    } catch (error) {
      console.log("Ошибка при удалении комментария: ", error);
    }
  }

  return (
    <div className={style.CommentDeleting}>
      <div className={style.messageDelete}>
        <span className={style.messageDeleteSpan}>
          Удалить этот комментарий?
        </span>
      </div>
      <div className={style.deleteButtonsBlock}>
        <button className={style.see_later} onClick={handleNo}>
          Нет
        </button>
        <button className={style.i_seen} onClick={handleYes}>
          Да
        </button>
      </div>
    </div>
  );
}

export default observer(ComentDeletingLxp);
