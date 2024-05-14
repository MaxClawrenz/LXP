import style from "../../style.module.css";
function CommentToolsLxp(props: any) {
  function handleopen() {
    if (props.isDropdownOpened) {
      props.setIsDropdownOpened(false);
    } else {
      props.setIsDropdownOpened(true);
    }
  }
  return (
    <button onClick={handleopen} className={style.comment_menu}>
      <svg
        width="5"
        height="20"
        viewBox="0 0 5 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"></circle>
        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"></circle>
        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"></circle>
      </svg>
    </button>
  );
}

export default CommentToolsLxp;
