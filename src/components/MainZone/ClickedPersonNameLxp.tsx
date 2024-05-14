import style from "../../style.module.css";

function ClickedPersonNameLxp(props: any) {
  function ShowParent(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    try {
      const commentBlock = document.getElementById(
        `lxp_block_id_${props.parent_comment_id}`
      );
      if (commentBlock) {
        commentBlock.scrollIntoView({ behavior: "smooth" });
        commentBlock.classList.add(style.highlight);
        setTimeout(() => {
          commentBlock.classList.remove(style.highlight);
        }, 1000);
      } else {
        console.log("Отсутствует родительский комментарий");
      }
    } catch (err) {
      console.log("Произошла ошибка:", err);
    }
  }

  return (
    <span>
      <a onClick={ShowParent} href="">
        {props.name}
      </a>
      ,{" "}
    </span>
  );
}

export default ClickedPersonNameLxp;
