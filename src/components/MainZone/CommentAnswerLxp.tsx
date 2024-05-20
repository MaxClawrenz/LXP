import { useState, useEffect } from "react";
import style from "../../style.module.css";
import CommentToolsLxp from "./CommentToolsLxp";
import MenuToolsDropdownLxp from "./MenuToolsDropdownLxp";
import MenuToolsDropdownChild from "./MenuToolsDropdownChild";
import TextMessageChildLxp from "./TextMessageChildLxp";
import CommentImagesLxp from "./CommentImagesLxp";
import LikeLxpComment from "./LikeLxpComment";
import AnswerCommButtonLxp from "./AnswerCommButtonLxp";
import CommentsAnswerformLxp from "./CommentsAnswerformLxp";
import { observer } from "mobx-react-lite";
import postBody from "../../store/postBody";
import React from "react";
import ComentAnswerDeletingLxp from "./ComentAnswerDeletingLxp";

function CommentAnswerLxp(props: any) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [deletingComment, setDeletingComment] = useState(false);
  const [editingAnswer, setEditingAnswer] = useState(false);
  const [answerShow, setAnswerShow] = useState(false);
  const [sendingAnswer, setSendingAnswer] = useState(false);
  const [fioAutor, setfioAutor] = useState(props.fio);
  const [dataComment, setdataComment] = useState(props.date);

  useEffect(() => {
    if (props.fio.split(" ").length > 2) {
      const lastName = props.fio.split(" ")[0];
      const firstName = props.fio.split(" ")[1];
      setfioAutor(`${lastName} ${firstName}`);
    }
  }, [props.fio]);

  useEffect(() => {
    const checkAndConvertDate = (dateString: any) => {
      // Разбиваем дату: день, месяц, год, часы, минуты, секунды
      const [datePart, timePart] = dateString.split(" ");
      const [day, month, year] = datePart.split(".");
      const [hours, minutes, seconds] = timePart.split(":");

      // Если секунды есть, удаляем их
      if (seconds) {
        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
        setdataComment(formattedDate);
      } else {
        // Если секунд нет, оставляем дату без изменений
        setdataComment(dateString);
      }
    };

    checkAndConvertDate(props.date);
  }, [props.date]);

  return (
    <div
      className={style.lxp_comment_block}
      id={`lxp_block_id_${props.answer_id}`}
    >
      <div className={style.lxp_comment_header}>
        <div className={style.lxp_header_left}>
          <a href={`/_wt/${props.person_id}`}>
            <img
              className={style.lxp_avatar_comment_img}
              src={`/person_icon.html?id=${props.person_id}&type=100x100`}
            ></img>
          </a>
          <a href={`/_wt/${props.person_id}`}>
            <div className={style.lxp_idea_autor}>{fioAutor}</div>
          </a>
          <div className={style.lxp_post_date}>{dataComment}</div>
        </div>
        <div className={style.lxp_header_right}>
          {props.self && (
            <CommentToolsLxp
              isDropdownOpened={isDropdownOpened}
              setIsDropdownOpened={setIsDropdownOpened}
            />
          )}
          {isDropdownOpened && (
            <MenuToolsDropdownChild
              setDeletingComment={setDeletingComment}
              setEditingComment={setEditingAnswer}
              onClose={() => {
                setIsDropdownOpened(false);
              }}
              id={props.answer_id}
            />
          )}
        </div>
        <div
          className={style.lxp_right_part_comment_header}
          id={`articles_right_part_comment_header_${props.answer_id}`}
        ></div>
      </div>
      <TextMessageChildLxp
        parent_comment_id={props.id}
        idUpdate={props.parent_comment_id}
        fio={props.fio_parent}
        parent_id={props.parent_id}
        setEditingAnswer={setEditingAnswer}
        editing={editingAnswer}
        message={props.message}
        id={props.answer_id}
        comments={props.comments}
      />
      {props.file_ids && <CommentImagesLxp file_ids={props.file_ids} />}
      <div className={style.lxp_panel_buttons_comments}>
        <LikeLxpComment
          likes_count={Number(props.likes_count)}
          id={props.answer_id}
          class={props.class}
          key={""}
          fio={""}
          date={""}
          person_id={""}
          self={false}
          message={""}
          file_ids={""}
          childrenArr={[]}
          date2={""}
          blog_id={""}
          updateCommentsCount={function (newCount: number): void {
            throw new Error("Function not implemented.");
          }}
          fio_parent={""}
          parent_comment_id={""}
        />
        <AnswerCommButtonLxp
          answerShow={answerShow}
          setAnswerShow={setAnswerShow}
        />
      </div>
      {answerShow && (
        <CommentsAnswerformLxp
          setSendingAnswer={props.setSendingAnswer}
          post_id={props.post_id}
          fio={props.fio}
          blog_id={props.blog_id}
          id={props.answer_id}
          parent_id={props.id}
          onClose={() => {
            setAnswerShow(false);
          }}
          channel_id={props.channel_id}
          comments={postBody.postComments}
          parent_comment_id={props.parent_comment_id}
          fio_parrent={props.fio_parent}
          answerShow={answerShow}
          setAnswerShow={setAnswerShow}
          updateCommentsCount={props.updateCommentsCount}
        />
      )}
      {deletingComment && (
        <ComentAnswerDeletingLxp
          setDeletingComment={setDeletingComment}
          id={props.answer_id}
          parent_id={props.parent_id}
          blog_id={props.blog_id}
          comments={postBody.postComments}
          parent_comment_id={props.parent_comment_id}
          parent={props.id}
          updateCommentsCount={props.updateCommentsCount}
        />
      )}
    </div>
  );
}

export default React.memo(observer(CommentAnswerLxp));
