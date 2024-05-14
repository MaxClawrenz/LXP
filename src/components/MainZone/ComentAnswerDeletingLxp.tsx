import axios from "axios";
import postBody from "../../store/postBody";
import { observer } from "mobx-react-lite";
import style from "../../style.module.css";

function ComentAnswerDeletingLxp(props: any) {
  function handleNo() {
    props.setDeletingComment(false);
  }

  async function handleYes() {
    try {
      const response = await axios.get(
        "/custom_web_template.html?object_code=delete_comment_ribbon_react",
        { params: { comment_id: props.id } }
      );

      postBody.deleteReply(props.parent, props.id);
      postBody.setCommentsCount(postBody.commentsCount - 1);
      props.setDeletingComment(false);
    } catch (error) {
      console.log("Ошибка при удалении ответа на комментарий: ", error);
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

export default observer(ComentAnswerDeletingLxp);
