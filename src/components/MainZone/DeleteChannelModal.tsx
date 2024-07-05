import { Dispatch, SetStateAction, useEffect } from "react";
import style_channels from "../../components/MainZone/style_channels.module.css";
import { AnimatePresence, motion } from "framer-motion";
import CreateChannelForm from "./CreateChannelForm";
import createChannel from "../../store/createChannel";

function DeleteChannelModal({
  setModalDeleteChannel,
  setModalDelete,
  channelId,
  setCreateChannelForm
}: {
  channelId: string;
  setOpenButtons: Dispatch<SetStateAction<boolean>>;
  setModalDeleteChannel: Dispatch<SetStateAction<boolean>>;
  setModalDelete: Dispatch<SetStateAction<boolean>>;
  setCreateChannelForm: (value: boolean) => void
}) {
  const mask = document.getElementById("get_report_mask");
  function continueCreateChannel(
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) {
    event.stopPropagation();
    if (mask) mask.style.display = "none";
    setModalDeleteChannel(false);
  }

  function acceptDeleteChannel() {
    if (mask) mask.style.display = "none";
    setModalDeleteChannel(false);
    setCreateChannelForm(false);
    createChannel.deleteChannel(channelId);
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
        acceptDeleteChannel();
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
        className={style_channels.DeleteChannelModal}
        initial={{ height: 0, opacity: 0, width: 0 }}
        animate={{ height: "170px", opacity: 1, width: "460px" }}
        exit={{ height: 0, opacity: 0, width: 0 }}
        style={{ overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style_channels.DeleteChannelModal_text}>
          Вы действительно хотите удалить этот канал? Изменения не будут сохранены.
        </div>
        <div className={style_channels.DeleteChannelModal_buttons}>
          <button
            onClick={acceptDeleteChannel}
            className={style_channels.DeleteChannelModal_buttonYes}
          >
            Да
          </button>
          <button
            onClick={continueCreateChannel}
            className={style_channels.DeleteChannelModal_buttonNo}
          >
            Нет
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DeleteChannelModal;
