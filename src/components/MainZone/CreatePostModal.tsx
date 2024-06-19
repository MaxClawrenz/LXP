import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect } from "react";
import { ICreatePostModal } from "../../interfaces/ICreatePostModal";
import style from "../../style.module.css";
import CloseIcon from "./MainIcons/CloseIcon";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useForm, Controller } from "react-hook-form";
import draftToHtml from "draftjs-to-html";
import { ICreatePostModalData } from "../../interfaces/ICreatePostModalData";
import { observer } from "mobx-react-lite";
import MainZoneChannels from "../../store/MainZoneChannels";
import { AnimatePresence, motion } from "framer-motion";

function CreatePostModal(props: ICreatePostModal) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      content: EditorState.createEmpty(),
      postName: "",
    },
  });

  function onSubmit(data: ICreatePostModalData) {
    const htmlData = draftToHtml(
      convertToRaw(data.content.getCurrentContent())
    );
    MainZoneChannels.addNewPost(props.channelId, data.postName, htmlData);
    reset();
    props.openModal();
  }

  function closeEsc(e: KeyboardEvent) {
    if (e.key === "Escape") {
      props.openModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closeEsc);
    document.getElementsByName("postName")[0].focus();

    return () => {
      document.removeEventListener("keydown", closeEsc);
    };
  }, []);

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
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ minHeight: "160px", height: "100%", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        style={{ overflow: "hidden" }}
        className={style.CreatePostModal}
      >
        <div className={style.CreatePostModal_header}>
          <div className={style.CreatePostModal_leftBlock}>
            <img
              className={style.CreatePostModal_icon}
              src={`/download_file.html?file_id=${props.avatarChannelID}`}
              width="30"
              height="30"
            />
            <div className={style.CreatePostModal_Name}>
              {props.channelName}
            </div>
          </div>
          <div onClick={() => props.openModal()}>
            <CloseIcon />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.CreatePostModal_PostNameBlock}>
            <input
              {...register("postName", {
                required: "Название поста обязательно к заполнению",
              })}
              className={style.CreatePostModal_PostNameInput}
              placeholder="Заголовок"
              type="text"
            />
            <div>
              {errors?.postName && (
                <p className={style.errorText}>
                  {errors?.postName?.message || "Ошибка!"}
                </p>
              )}
            </div>
          </div>
          <Controller
            name="content"
            control={control}
            rules={{
              validate: (value) => {
                const hasText = value.getCurrentContent().hasText();
                return hasText || "Пост не может быть пустым";
              },
            }}
            render={({ field }) => (
              <div>
                <Editor
                  toolbarOnFocus
                  editorState={field.value}
                  onEditorStateChange={field.onChange}
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
                      inputAccept:
                        "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                    },
                  }}
                />
                <div>
                  {errors.content && (
                    <p className={style.errorText}>
                      {errors.content.message || "Ошибка"}
                    </p>
                  )}
                </div>
              </div>
            )}
          />

          <button className={style.CreatePostModal_SubmitButton} type="submit">
            Опубликовать
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default observer(CreatePostModal);
