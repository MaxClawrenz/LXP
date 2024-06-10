import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { SetStateAction, useState } from "react";
import { ICreatePostModal } from "../../interfaces/ICreatePostModal";
import style from "../../style.module.css";
import CloseIcon from "./MainIcons/CloseIcon";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

function CreatePostModal(props: ICreatePostModal) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleChange(data: SetStateAction<EditorState>) {
    setEditorState(data);
  }

  function uploadImageCallBack(file: File) {
    return new Promise((resolve) => {
      const data = new FormData();
      data.append("storyImage", file);
      axios
        .post(
          "/custom_web_template.html?object_code=image_upload_react",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((responseImage) => {
          resolve({ data: { link: responseImage.data } });
        });
    });
  }
  return (
    <div className={style.CreatePostModal}>
      <div className={style.CreatePostModal_header}>
        <div className={style.CreatePostModal_leftBlock}>
          <img
            className={style.CreatePostModal_icon}
            src={`/download_file.html?file_id=${props.avatarChannelID}`}
            width="64"
            height="64"
          />
          <div className={style.CreatePostModal_Name}>{props.channelName}</div>
        </div>
        <div onClick={() => props.setModalOpen(false)}>
          <CloseIcon />
        </div>
      </div>
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleChange}
          localization={{
            locale: "ru",
          }}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "list",
              "textAlign",
              "history",
              "image",
              "emoji",
              "link",
            ],
            inline: { inDropdown: false },
            list: { inDropdown: false },
            textAlign: { inDropdown: false },
            link: { inDropdown: false },
            history: { inDropdown: false },
            emoji: { inDropdown: false },
            image: {
              urlEnabled: true,
              uploadEnabled: true,
              uploadCallback: uploadImageCallBack,
              alignmentEnabled: true,
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            },
          }}
        />
      </div>
    </div>
  );
}

export default CreatePostModal;
