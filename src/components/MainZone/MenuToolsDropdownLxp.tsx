import { useRef } from "react";
import { CommentLxp } from "../../interfaces/CommentLxp";
import style from "../../style.module.css";

function MenuToolsDropdownLxp(props: any) {
  const textAreaRef = useRef<HTMLInputElement>(null);

  function handleClose() {
    props.onClose();
  }

  function handleEdit() {
    props.setEditingComment(true);
    props.onClose();

    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 200);
  }

  function handleDelete() {
    props.setDeletingComment(true);
    props.onClose();
  }

  return (
    <div className={style.ToolsDropdown}>
      <ul className={style.ListToolsDropdown}>
        <li className={style.ElemDropdown} onClick={handleEdit}>
          Редактировать
        </li>
        <div className={style.divider}></div>
        <li className={style.ElemDropdown} onClick={handleDelete}>
          Удалить
        </li>
      </ul>
      <button className={style.closeTools} onClick={handleClose}>
        Закрыть
      </button>
    </div>
  );
}

export default MenuToolsDropdownLxp;
