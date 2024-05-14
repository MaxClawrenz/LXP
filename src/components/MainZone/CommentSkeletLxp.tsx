import style from "../../style.module.css";

function CommentSkeletLxp() {
  return (
    <div className={style.lxp_comment_block}>
      <div className={style.lxp_comment_header}>
        <div className={style.lxp_header_left}>
          <div className={style.skeletImg}></div>
          <div className={style.skeletAutor}></div>
          <div className={style.skeletPostDate}></div>
        </div>
      </div>
      <div className={style.skeletBodyMessage}>
        <div className={style.skeletText}></div>
        <div className={style.skeletText}></div>
      </div>
      <div className={style.lxp_panel_buttons_comments}>
        <div className={style.skeletButton}></div>
        <div className={style.skeletButton}></div>
      </div>
    </div>
  );
}

export default CommentSkeletLxp;
