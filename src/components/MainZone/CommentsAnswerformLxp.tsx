import { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import LxpEmojiICon from "./LxpEmojiICon";
import style from "../../style.module.css";
import FileIconLxp from "./MainIcons/FileIconLxp";
import { observer } from "mobx-react-lite";
import { CommentLxp } from "../../interfaces/CommentLxp";
import ImgPreviewLxp from "./ImgPreviewLxp";
import postBody from "../../store/postBody";

function CommentsAnswerformLxp(props: any) {
  interface FileObject {
    fileUrl: string;
    id: number;
  }

  const [name, setName] = useState(props.fio.split(" ")[1]);
  const [textComment, setTextComment] = useState(`${name}, `);
  const [filesArr, setFilesArr] = useState<File[]>([]);
  const [filesUrl, setFilesUrl] = useState<{ fileUrl: string; id: number }[]>(
    []
  );
  const [emojiOpened, setEmojiOpened] = useState(false);
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (props.answerShow && ref.current) {
      ref.current.focus();
      ref.current.setSelectionRange(textComment.length, textComment.length);
    }
  }, [props.answerShow]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      const newFilesArr = Array.from(files);
      setFilesArr((prevFiles) => [...prevFiles, ...newFilesArr]);
    }
  }

  function handleEmoji() {
    setEmojiOpened((prevState) => !prevState);
  }

  function onClick(emojiData: EmojiData, event: MouseEvent) {
    if (ref.current) {
      const currentValue = ref.current.value;
      const selectedEmoji = emojiData.emoji;

      // Создаем новую строку только с добавленным смайликом
      const updatedValue = currentValue + selectedEmoji + " ";

      setTextComment(updatedValue);
      ref.current.focus();

      // Перемещаем курсор в конец строки
      ref.current.setSelectionRange(updatedValue.length, updatedValue.length);
    }
  }

  function saveCursor() {
    if (ref.current) {
      ref.current.focus();
    }
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextComment(event.target.value);
  }

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.setSendingAnswer(true);
    const formData = new FormData();
    formData.append("comment_text", textComment);
    formData.append("parent_id", props.id);
    formData.append("post_id", props.blog_id);
    if (filesArr.length !== 0) {
      formData.append("with_files", "1");
      let i = 0;
      for (let file of filesArr) {
        formData.append("attachment" + i, file);
        i++;
      }
    } else {
      formData.append("with_files", "0");
    }
    props.setSendingAnswer(true);
    axios
      .post(
        "/custom_web_template.html?object_code=create_comment_answer_lxp_react",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((data) => {
        postBody.setCommentsCount(postBody.commentsCount + 1);
        const newReply = data.data;
        const parentCommentId = props.parent_id;
        postBody.addReply(parentCommentId, newReply);

        setTimeout(() => {
          const element = document.getElementById(
            `lxp_block_id_${data.data.id}`
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            element.classList.add("highlight");
            setTimeout(() => {
              element.classList.remove("highlight");
            }, 1000);
          }
        }, 200);

        props.setSendingAnswer(false);
      })
      .catch(console.log);

    props.onClose();
  }

  useEffect(() => {
    if (filesArr.length !== 0) {
      const filesUrlArr: Array<{ fileUrl: string; id: number }> = [];
      filesArr.forEach((file, index) => {
        let fileObj: FileObject = { fileUrl: "", id: 0 };
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          if (event.target) {
            const fileUrl = event.target.result as string;
            fileObj.fileUrl = fileUrl;
            fileObj.id = index;
            filesUrlArr.push(fileObj);
            if (filesUrlArr.length === filesArr.length) {
              setFilesUrl(filesUrlArr);
            }
          }
        };
      });
    } else {
      setFilesUrl([]);
    }
  }, [filesArr]);

  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function commentCancel(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    props.onClose();
  }

  return (
    <form className={style.form_comment_lxp} action="">
      <div className={style.comment_nameFromParent}>
        Ответ для <u>{name}:</u>
      </div>
      <div
        className={style.root_comment_text_lxp}
        id="root_comment_text_articles"
      >
        <textarea
          ref={ref}
          onChange={handleChange}
          onBlur={saveCursor}
          className={style.root_comment_text_lxps}
          id={style.root_comment_text_lxps}
          value={textComment}
        ></textarea>
        <input
          ref={fileInputRef}
          type="file"
          id="filesComment"
          className={style.file_lxp}
          multiple
          accept="image/png, image/jpeg"
          onChange={handleFileChange} // Обработчик выбора файлов
        />

        <div className={style.comment_buttons_container_lxp}>
          <div className={style.comment_buttons_left_lxp}>
            <div className={style.icon_button_lxp} onClick={selectFiles}>
              <FileIconLxp />
            </div>
            <div className={style.emoji_button_lxp} onClick={handleEmoji}>
              <LxpEmojiICon />
            </div>
          </div>
          <div id={style.previewImgs}>
            {filesUrl.map((file, index) => (
              <ImgPreviewLxp
                key={index}
                index={file.id}
                url={file.fileUrl}
                filesArr={filesArr}
                setFilesArr={setFilesArr}
              />
            ))}
          </div>
          <div className={style.previwImg_lxp}></div>
          <div className={style.comment_button_right_lxp}>
            <a
              href="null"
              className={style.cancel_button_lxp}
              onClick={commentCancel}
            >
              Отменить
            </a>
            <button
              className={style.button_submit_commtnt_lxp}
              onClick={handleSubmit}
            >
              Отправить
            </button>
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
      </div>
    </form>
  );
}

export default observer(CommentsAnswerformLxp);
