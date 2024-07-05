import { Dispatch, SetStateAction, useEffect } from "react";
import style from "../../style.module.css";
import news from "../../store/news";
import postBody from "../../store/postBody";
import { AnimatePresence, motion } from "framer-motion";

function DeletePostModal({
  postId,
  setModalDelete,
  setOpenButtons,
}: {
  postId: string;
  setModalDelete: Dispatch<SetStateAction<boolean>>;
  setOpenButtons: Dispatch<SetStateAction<boolean>>;
}) {
  const mask = document.getElementById("get_report_mask");
  function DeletePost(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    event.stopPropagation();
    if (mask) mask.style.display = "none";
    setModalDelete(false);
    setOpenButtons(false);
  }

  function acceptDelete() {
    postBody.deletePostFromServer(postId);
    news.deletePost(postId);
    if (mask) mask.style.display = "none";
    setModalDelete(false);
  }

  useEffect(() => {
    const handleMaskClick = (event: MouseEvent) => {
      event.stopPropagation();
      if (mask) mask.style.display = "none";
      setModalDelete(false);
    };
    const handleMaskEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mask) mask.style.display = "none";
        setModalDelete(false);
      } else if (e.key === "Enter") {
        acceptDelete();
      }
    };

    mask?.addEventListener("click", handleMaskClick);
    document.addEventListener("keydown", handleMaskEscape);

    return () => {
      mask?.removeEventListener("click", handleMaskClick);
      document.removeEventListener("keydown", handleMaskEscape);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={style.DeletePostModal}
        initial={{ height: 0, opacity: 0, width: 0 }}
        animate={{ height: "158px", opacity: 1, width: "460px" }}
        exit={{ height: 0, opacity: 0, width: 0 }}
        style={{ overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.DeletePostModal_text}>
          Вы действительно хотите удалить этот пост?
        </div>
        <div className={style.DeletePostModal_buttons}>
          <button
            onClick={acceptDelete}
            className={style.DeletePostModal_buttonYes}
          >
            Да
          </button>
          <button
            onClick={DeletePost}
            className={style.DeletePostModal_buttonNo}
          >
            Нет
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DeletePostModal;
