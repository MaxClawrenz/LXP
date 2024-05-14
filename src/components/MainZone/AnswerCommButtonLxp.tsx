import CommentIcon from "./MainIcons/CommentIcon";
import React from "react";
import styles from "../../style.module.css";

function AnswerCommButtonLxp(props: any) {
  function handleOpenAnswer() {
    if (props.answerShow) {
      props.setAnswerShow(false);
      // console.log("отработал");
    } else {
      props.setAnswerShow(true);
      // console.log(" по другому отработал");
    }
  }
  return (
    <div
      className={styles.commentsCount}
      id={styles.icon_lxp_comment}
      onClick={handleOpenAnswer}
    >
      <CommentIcon />
      <span className={styles.numberCount}></span>
    </div>
  );
}

export default AnswerCommButtonLxp;
