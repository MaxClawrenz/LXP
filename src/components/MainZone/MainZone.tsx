import { observer } from "mobx-react-lite";
import news from "../../store/news";
import { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import styles from "../../style.module.css";
import SkeletCard from "./SkeletCard";
import NotFoundIcon from "./MainIcons/NotFoundIcon";
import LoadNewPostsButton from "./LoadNewPostsButton";

function MainZone() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const scrollTop = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (news._target === "empty" || news.newsArr.length > 0) {
      news.getVeryNewPostsCount(news.newsArr[0].id);
    }
  }, []);

  useEffect(() => {
    if (scrollTop.current) {
      scrollTop.current.scrollTop = news.newsScrollTop;
      console.log(news.newsScrollTop);
    }
  }, []);

  function handlePosition() {
    if (scrollTop.current) news.newsScrollTop = scrollTop.current.scrollTop;
  }

  return (
    <div ref={scrollTop} className={styles.MainZone} id="main-zone">
      {news.veryNewPostsCounter > 0 ? (
        <LoadNewPostsButton count={news.veryNewPostsCounter} />
      ) : null}
      {news.isLoadingVeryNewPosts && <SkeletCard />}
      {(news.filteredArr &&
        news.filteredArr.length > 0 &&
        news.filteredArr.map((post) => (
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
            is_my_blog={post.is_my_blog}
            blog_id={post.blog_id}
            file_id={post.file_id}
            handlePosition={handlePosition}
          />
        ))) ||
        (news.newsArr.length > 0 &&
          news.newsArr.map((post) => (
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
              is_my_blog={post.is_my_blog}
              blog_id={post.blog_id}
              file_id={post.file_id}
              handlePosition={handlePosition}
            />
          )))}
      {news.newsArr.length === 0 && !news.isLoading && (
        <NotFoundIcon text={"Нет постов"} width={"568px"} />
      )}
      {news.isLoading && <SkeletCard />}
      <div ref={bottomOfList} className={styles.news_observer}></div>
    </div>
  );
}

export default observer(MainZone);
