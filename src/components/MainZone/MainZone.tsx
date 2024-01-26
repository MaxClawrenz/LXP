import { observer } from "mobx-react-lite";
import news from "../../store/news";
import { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import styles from "../../style.module.css";

function MainZone() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const newsObserver = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !news.isLoading &&
          news._target !== "empty"
        )
          news.getNews();
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (bottomOfList.current) newsObserver.observe(bottomOfList.current);

    return () => {
      if (bottomOfList.current) newsObserver.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current]);

  return (
    <div className={styles.MainZone}>
      {news.newsArr.map((post) => (
        <PostCard
          id={post.id}
          key={post.id}
          channel_pict={post.channel_pict}
          channel_name={post.channel_name}
          channel_id={post.channel_id}
          knowledge_name={post.knowledge_name}
          time_posted={post.time_posted}
          is_follow={post.is_follow}
          post_name={post.post_name}
          post_text={post.post_text}
          likes_count={post.likes_count}
          my_like={post.my_like}
          comments_count={post.comments_count}
          favourite_count={post.favourite_count}
          my_favourite={post.my_favourite}
          create_date={post.create_date}
        />
      ))}
      {news.isLoading && <div>Loading...</div>}
      <div ref={bottomOfList} className={styles.news_observer}></div>
    </div>
  );
}

export default observer(MainZone);
