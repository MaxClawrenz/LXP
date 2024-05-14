import style from "../../style.module.css";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { CommentLxp } from "../../interfaces/CommentLxp";
import postBody from "../../store/postBody";
import LxpEmojiICon from "./LxpEmojiICon";
import EmojiPicker from "emoji-picker-react";
import FileIconLxp from "./MainIcons/FileIconLxp";
import ImgPreviewLxp from "./ImgPreviewLxp";
import { observer } from "mobx-react-lite";

function CommentForm(props: any) {
  interface FileObject {
    fileUrl: string;
    id: number;
  }
  const [sendingComment, setSendingComment] = useState(false);
  const [textComment, setTextComment] = useState(""); // коммент
  const [filesArr, setFilesArr] = useState<File[]>([]); //файл
  const [filesUrl, setFilesUrl] = useState<{ fileUrl: string; id: number }[]>(
    []
  ); //ссылка на файл
  const [emojiOpened, setEmojiOpened] = useState(false);
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextComment(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setTextComment("");
    setSendingComment(true);
    setEmojiOpened(false);
    setFilesArr([]);
    event.preventDefault();
    const formData = new FormData();
    formData.append("comment_text", textComment);
    formData.append("post_id", props.blog_id);
    console.log("id поста", props.blog_id);
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
    if (textComment || filesArr.length !== 0) {
      postBody.setIsNewCommentLoading(true);
      axios
        .post(
          "/custom_web_template.html?object_code=new_comment_lxp_react",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((data) => {
          postBody.setCommentsCount(postBody.commentsCount + 1);

          const updatedComment: CommentLxp = {
            ...props,
            message: String(data.data), // Обновляем текст комментария
          };

          postBody.updateComment(updatedComment);
          const newComment = data.data;
          postBody.addNewComment(newComment);
          postBody.setIsNewCommentLoading(false);
        })
        .catch(console.log);
    }
  }

  //добавляем функцию открытия эмодзи
  function handleEmoji() {
    setEmojiOpened((prevState) => !prevState);
  }

  //добавляем функцию эмодзи
  function onClick(emojiData: EmojiData, event: MouseEvent) {
    if (ref.current) {
      const currentValue = ref.current.value;
      const selectedEmoji = emojiData.emoji;
      const updatedValue =
        currentValue.substring(0, ref.current.selectionStart) +
        selectedEmoji +
        currentValue.substring(ref.current.selectionEnd);

      setTextComment(updatedValue);
      ref.current.focus();
      ref.current.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
    }
  }

  //добавляем функцию для файлов
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      const newFilesArr = Array.from(files);
      setFilesArr((prevFiles) => [...prevFiles, ...newFilesArr]);
    }
  }

  //добавляем функцию выбора файлов
  function selectFiles() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  //добавляем useEffect
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

  return (
    <div className={style.comment_form}>
      <form onSubmit={handleSubmit}>
        <textarea
          ref={ref}
          onChange={handleCommentChange}
          className={style.comment_text_area}
          id="comment"
          value={textComment}
          placeholder="Написать комментарий"
          name="comment"
        ></textarea>
        <input
          ref={fileInputRef}
          type="file"
          id="filesComment"
          className={style.file_lxp}
          multiple
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />

        <div className={style.comment_bottom_zone}>
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

          <div className={style.comment_button_right_lxp_form}>
            <button className={style.comment_button} type="submit">
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
      </form>
    </div>
  );
}

export default observer(CommentForm);
