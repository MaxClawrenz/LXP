import { Dispatch, useEffect, useState } from "react";
import style from "../../style.module.css";
import ReactDOM from "react-dom";
import DeletePostModal from "./DeletePostModal";
import { AnimatePresence, motion } from "framer-motion";

function PostButtonsBlock({
  is_my_blog,
  postId,
  setOpenButtons,
}: {
  is_my_blog: boolean;
  postId: string;
  setOpenButtons: Dispatch<React.SetStateAction<boolean>>;
}) {
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const postModalNode = document.getElementById("create_modal");

  if (!postModalNode) return null;
  const mask = document.getElementById("get_report_mask");
  const strikeWindow = document.getElementById("report_form");
  const btnClose = document.getElementById("get_gifts_close");
  function DeletePost(event: React.MouseEvent<HTMLLIElement>) {
    event.stopPropagation();
    if (!modalDelete) {
      if (mask) mask.style.display = "block";
      setModalDelete(true);
    }
  }

  function StrikePost(event: React.MouseEvent<HTMLLIElement>) {
    event.stopPropagation();

    if (!modalDelete) {
      if (mask) mask.style.display = "block";
      if (strikeWindow) {
        strikeWindow.style.display = "block";
        document.getElementById("report_text")?.focus();
      }
    }
  }

  useEffect(() => {
    const handleStrikeClose = (e: MouseEvent) => {
      e.preventDefault();
      if (strikeWindow) strikeWindow.style.display = "none";
      if (mask) mask.style.display = "none";
      setOpenButtons(false);
    };

    const handleMaskEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mask) mask.style.display = "none";
        if (strikeWindow) strikeWindow.style.display = "none";
        setOpenButtons(false);
      }
    };

    mask?.addEventListener("click", handleStrikeClose);
    btnClose?.addEventListener("click", handleStrikeClose);
    document.addEventListener("keydown", handleMaskEscape);

    return () => {
      mask?.removeEventListener("click", handleStrikeClose);
      btnClose?.removeEventListener("click", handleStrikeClose);
      document.removeEventListener("keydown", handleMaskEscape);
    };
  }, []);

  return (
    <div className={style.PostButtonsBlock}>
      <AnimatePresence>
        <motion.ul
          className={style.PostButtonsBlock_list}
          initial={{ minHeight: 0, height: 0, opacity: 0 }}
          animate={{ minHeight: "38px", height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0, width: 0 }}
          style={{ overflow: "hidden" }}
        >
          {is_my_blog && (
            <li
              onClick={DeletePost}
              className={style.PostButtonsBlock_list_elem}
            >
              Удалить
            </li>
          )}
          {!is_my_blog && (
            <li
              onClick={StrikePost}
              className={style.PostButtonsBlock_list_elem}
            >
              Пожаловаться
            </li>
          )}
        </motion.ul>
      </AnimatePresence>
      {modalDelete &&
        ReactDOM.createPortal(
          <DeletePostModal
            postId={postId}
            setModalDelete={setModalDelete}
            setOpenButtons={setOpenButtons}
          />,
          postModalNode
        )}
    </div>
  );
}

export default PostButtonsBlock;
