import style from "../style.module.css";
import PostZone from "./MainZone/PostZone";

function PostPage() {
  return (
    <div className={style.PostPage}>
      <PostZone />
    </div>
  );
}

export default PostPage;
