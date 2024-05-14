import React from "react";
import style from "../../style.module.css";
import { useState, useEffect } from "react";
import { CommentLxp } from "../../interfaces/CommentLxp";
import { observer } from "mobx-react-lite";
import CommentToolsLxp from "./CommentToolsLxp";
import MenuToolsDropdownLxp from "./MenuToolsDropdownLxp";
import TextMessageLxp from "./TextMessageLxp";
import CommentImagesLxp from "./CommentImagesLxp";
import PostFooter from "./PostFooter";
import LikeLxpComment from "./LikeLxpComment";
import AnswerCommButtonLxp from "./AnswerCommButtonLxp";
import CommentsAnswerformLxp from "./CommentsAnswerformLxp";
import postBody from "../../store/postBody";
import ComentDeletingLxp from "./ComentDeletingLxp";
import CommentAnswerLxp from "./CommentAnswerLxp";
import CommentSkeletLxp from "./CommentSkeletLxp";

function CommentsLxp(props: CommentLxp) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [editingComment, setEditingComment] = useState(false);
  const [deletingComment, setDeletingComment] = useState(false);
  const [answerShow, setAnswerShow] = useState(false);
  const [sendingAnswer, setSendingAnswer] = useState(false);
  const [sendingComment, setSendingComment] = useState(false);
  const [loadingAnswerId, setLoadingAnswerId] = useState(null);
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

      // Если секунды есть, удаляем их и форматируем дату без секунд
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
    <>
      <div className={style.lxp_comment_block} id={`lxp_block_id_${props.id}`}>
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
              <MenuToolsDropdownLxp
                setDeletingComment={setDeletingComment}
                setEditingComment={setEditingComment}
                onClose={() => {
                  setIsDropdownOpened(false);
                }}
                id={props.id}
              />
            )}
          </div>
          <div
            className={style.lxp_right_part_comment_header}
            id={`lxp_right_part_comment_header_${props.id}`}
          ></div>
        </div>
        <TextMessageLxp
          setEditingComment={setEditingComment}
          editing={editingComment}
          message={props.message}
          id={props.id}
        />
        {props.file_ids && <CommentImagesLxp file_ids={props.file_ids} />}
        <div className={style.lxp_panel_buttons_comments}>
          <LikeLxpComment
            id={props.id}
            likes_count={props.likes_count}
            class={props.class}
            key={props.id}
            fio={props.fio}
            date={props.date}
            person_id={props.person_id}
            self={props.self}
            message={props.message}
            file_ids={props.file_ids}
            childrenArr={props.childrenArr}
            date2={props.date2}
            blog_id={props.blog_id}
            updateCommentsCount={function (newCount: number): void {
              throw new Error("Function not implemented.");
            }}
            parent_comment_id={""}
            fio_parent={""}
          />
          <AnswerCommButtonLxp
            answerShow={answerShow}
            setAnswerShow={setAnswerShow}
          />
        </div>
        {answerShow && (
          <CommentsAnswerformLxp
            setSendingAnswer={setSendingAnswer}
            fio={props.fio}
            parent_id={props.id}
            id={props.id}
            onClose={() => {
              setAnswerShow(false);
            }}
            channel_id={postBody.post.channel_id}
            comments={postBody.postComments}
            blog_id={props.blog_id}
            answerShow={answerShow}
            setAnswerShow={setAnswerShow}
            updateCommentsCount={props.updateCommentsCount}
          />
        )}
        {deletingComment && (
          <ComentDeletingLxp
            comments={postBody.postComments}
            setDeletingComment={setDeletingComment}
            id={props.id}
            blog_id={props.blog_id}
            updateCommentsCount={props.updateCommentsCount}
          />
        )}
      </div>

      <div className={style.comments_live_lxp} id={`comments_live_${props.id}`}>
        {props.childrenArr &&
          props.childrenArr.map((answer) => (
            <CommentAnswerLxp
              answer_id={answer.id}
              key={answer.id}
              id={props.id}
              person_id={answer.person_id}
              fio={answer.fio}
              fio_parent={answer.fio_parent}
              date={answer.date}
              self={answer.self}
              file_ids={answer.file_ids}
              likes_count={answer.likes_count}
              blog_id={props.blog_id}
              message={answer.message}
              class={answer.class}
              comments={postBody.postComments}
              parent_id={answer.id}
              parent_comment_id={answer.parent_comment_id}
              setSendingAnswer={setSendingAnswer}
              channel_id={postBody.post.channel_id}
              updateCommentsCount={props.updateCommentsCount}
            />
          ))}
        {sendingAnswer && <CommentSkeletLxp />}
      </div>
    </>
  );
}

export default React.memo(observer(CommentsLxp));
