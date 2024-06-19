import { AnimatePresence, motion } from "framer-motion";
import useTimeName from "../../hooks/useTimeName";
import news from "../../store/news";
import style from "../../style.module.css";

function LoadNewPostsButton({ count }: { count: number }) {
  const postName = useTimeName(count, ["пост", "поста", "постов"]);

  function getNewPosts() {
    news.getVeryNewPosts();
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ minHeight: "0", height: "42px", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        style={{ overflow: "hidden" }}
        onClick={getNewPosts}
        className={style.LoadNewPostsButton}
      >{`+${count} ${postName}. Нажми, чтобы обновить ленту`}</motion.div>
    </AnimatePresence>
  );
}

export default LoadNewPostsButton;
