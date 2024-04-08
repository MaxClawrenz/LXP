import style from "../../style.module.css";

function CommentForm() {
  return (
    <div className={style.comment_form}>
      <textarea
        placeholder="Написать комментарий"
        className={style.comment_text_area}
        name="comment"
        id="comment"
      ></textarea>
      <div className={style.comment_bottom_zone}>
        <button className={style.comment_button} type="submit">
          Отправить
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
