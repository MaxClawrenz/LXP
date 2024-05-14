import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import LxpEmojiICon from "./LxpEmojiICon";
import { observer } from "mobx-react-lite";
import style from "../../style.module.css";
import postBody from "../../store/postBody";
import { CommentLxp } from "../../interfaces/CommentLxp";
import Linkify from "react-linkify";
import ClickedPersonNameLxp from "./ClickedPersonNameLxp";

const parse = require("html-react-parser");

function TextMessageChildLxp(props: any) {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [textValue, setTextValue] = useState(
    props.message.replaceAll("<br>", "\n")
  );
  const [emojiOpened, setEmojiOpened] = useState(false);
  const name = props.fio ? props.fio.split(" ")[1] : "";

  useEffect(() => {
    // console.log("Props FIO:", props.fio); // Лог свойства props.fio
    // console.log("Text Value:", textValue); // Лог текущего значения текста
    if (ref.current != null) {
      ref.current.focus();
      ref.current.setSelectionRange(textValue.length, textValue.length);
    }
    // console.log("Editing Status:", props.editing); // Проверьте статус редактирования
  }, [props.editing]);

  function handleChangeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
    // console.log("Current Text Value:", event.target.value); // Лог изменений в тексте при вводе
    setTextValue(event.target.value);
  }

  function onClick(emojiData: EmojiData, event: MouseEvent) {
    if (ref.current !== null) {
      setTextValue(
        textValue.substring(0, ref.current.selectionStart) +
          emojiData.emoji +
          textValue.substring(ref.current.selectionEnd)
      );
      ref.current?.focus();
      ref.current.setSelectionRange(
        ref.current.selectionStart + 1,
        ref.current.selectionStart + 1
      );
    }
  }

  function saveCursor() {
    const textarea = ref.current;
    textarea?.focus();
  }

  function handleEmoji() {
    setEmojiOpened(!emojiOpened);
  }

  function commentCancel() {
    props.setEditingAnswer(false);
    setTextValue(props.message.replaceAll("<br>", "\n"));
    setEmojiOpened(false);
  }

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    if (textValue === props.message.replaceAll("<br>", "\n")) {
      console.log("Комментарий не изменился");
    } else {
      axios
        .post("/custom_web_template.html?object_code=refresh_comment", {
          params: { comment_id: props.id, new_text: textValue },
        })
        .then((data) => {
          // Обновляем только если успешно получен ответ от сервера
          const updatedMessage = String(data.data);

          const { id, parent_comment_id } = props;

          postBody.updateChildComment(
            parent_comment_id || id,
            id,
            updatedMessage
          );
          setTextValue(updatedMessage);

          props.setEditingAnswer(false);
          setEmojiOpened(false);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }

  return (
    <div className={style.lxp_body_message}>
      {props.editing ? (
        <form className={style.form_comment_lxp} name="form_comment_articles">
          <div className={style.root_comment_text_lxp}>
            <textarea
              className={`textArea_${props.id}`}
              ref={ref}
              onChange={handleChangeText}
              value={textValue}
              onBlur={saveCursor}
              name="root_comment_text_artickles"
              id={style.root_comment_text_lxp}
            ></textarea>
            <div className={style.comment_buttons_container_lxp}>
              <div className={style.comment_buttons_left_lxp}>
                <div className={style.emojiSelectorIcon} onClick={handleEmoji}>
                  <LxpEmojiICon />
                </div>
              </div>

              <div className={style.comment_button_right_lxp}>
                <a className={style.cancel_button_lxp} onClick={commentCancel}>
                  Отменить
                </a>
                <button
                  className={style.button_submit_commtnt_lxp}
                  onClick={handleSubmit}
                  name="root_comment_button"
                >
                  Обновить
                </button>
              </div>
            </div>
          </div>
          {emojiOpened && (
            <div className="emoji_container">
              <EmojiPicker
                onEmojiClick={onClick}
                autoFocusSearch={false}
                searchDisabled
                height={300}
                width="50%"
                lazyLoadEmojis={true}
                previewConfig={{
                  showPreview: false,
                }}
                skinTonesDisabled
              />
            </div>
          )}
        </form>
      ) : (
        <p className={style.lxp_comment_text} id={`text_${props.id}`}>
          <ClickedPersonNameLxp
            parent_comment_id={props.idUpdate}
            name={name}
            parent_id={props.parent_id}
          />
          <Linkify>{parse(props.message.replace(`${name}, `, ""))}</Linkify>
        </p>
      )}
    </div>
  );
}

export default observer(TextMessageChildLxp);
