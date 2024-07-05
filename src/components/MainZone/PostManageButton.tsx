import { useState } from "react";
import style from "../../style.module.css";
import PostButtonsBlock from "./PostButtonsBlock";

function PostManageButton({
  is_my_blog,
  postId,
}: {
  is_my_blog: boolean;
  postId: string;
}) {
  const [openButtons, setOpenButtons] = useState<boolean>(false);

  function openCloseButton() {
    setOpenButtons(!openButtons);
  }

  return (
    <>
      <div
        onClick={openCloseButton}
        className={
          openButtons ? style.PostManageButtonActive : style.PostManageButton
        }
      >
        <svg
          width="21"
          height="5"
          viewBox="0 0 21 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#C2C2C2" />
          <circle cx="10.5" cy="2.5" r="2.5" fill="#C2C2C2" />
          <circle cx="18.5" cy="2.5" r="2.5" fill="#C2C2C2" />
        </svg>
        {openButtons && (
          <PostButtonsBlock
            postId={postId}
            is_my_blog={is_my_blog}
            setOpenButtons={setOpenButtons}
          />
        )}
      </div>
    </>
  );
}

export default PostManageButton;
