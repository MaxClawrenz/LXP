import { IArticlesForMyChannel } from "../../interfaces/IArticlesForMyChannel";
import CommentsForMyChannel from "./CommentsForMyChannel";
import MyFirstArticle from "./MyFirstArticle";
import MySubscriebers from "./MySubsribers";
import PostCard from "./PostCard";
import style_channels from "./style_channels.module.css";
import { observer } from "mobx-react-lite";
import Channels from "../../store/MainZoneChannels";
import SkeletCard from "./SkeletCard";
import { useState } from "react";
import ReactDOM from "react-dom";
import CreatePostModal from "./CreatePostModal";

function ArticlesForMyChannel(props: IArticlesForMyChannel) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const postModalNode = document.getElementById("create_modal");
  if (!postModalNode) return null;

  function openModal() {
    const mask = document.getElementById("get_report_mask");
    if (!isModalOpen) {
      if (mask) mask.style.display = "block";
      setModalOpen(true);
    } else {
      if (mask) mask.style.display = "none";
      setModalOpen(false);
    }
  }

  return (
    <div className={style_channels.blockForMyChannelArticles}>
      <div className={style_channels.createAndNewArticles}>
        <div className={style_channels.blockForCreateArticle}>
          <div className={style_channels.topBlockTitle}>
            <div className={style_channels.avatarBlock}>
              <img
                alt=""
                src={`/download_file.html?file_id=${props.avatarChannelID}`}
                className={style_channels.imgChannelAvatar}
              />
            </div>
            <div onClick={openModal} className={style_channels.btnNewPost}>
              Новая запись
            </div>
          </div>
          
        </div>
        {props.createMyFirstPost && props.arrPostsInChannel.length === 0 && (
          <MyFirstArticle
            channelId={props.channelId}
            authorID={props.authorID}
          />
        )}
        <div className={style_channels.block_for_components_articles}>
          {Channels.isLoadingPosts && <SkeletCard />}
          {props.viewMyPosts &&
            props.posts.length > 0 &&
            props.posts.map((post) => (
              <PostCard
                id={post.id}
                channel_pict={post.channel_pict}
                channel_name={post.channel_name}
                channel_id={post.channel_id}
                knowledge_name={post.knowledge_name}
                time_posted={post.time_posted}
                create_date={post.create_date}
                is_follow={post.is_follow}
                post_name={post.post_name}
                post_text={post.post_text}
                likes_count={post.likes_count}
                my_like={post.my_like}
                comments_count={post.comments_count}
                favourite_count={post.favourite_count}
                my_favourite={post.my_favourite}
                is_my_blog={post.is_my_blog}
                blog_id={post.blog_id}
                file_id={post.file_id}
                handlePosition={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ))}

          {props.viewMyComments && props.arrComments.length > 0 && (
            <CommentsForMyChannel arrComments={props.arrComments} />
          )}
        </div>
      </div>
      {props.arrSubscriptionsInChannel.length > 0 && (
        <MySubscriebers
          arrSubscriptionsInChannel={props.arrSubscriptionsInChannel}
          arrCountSubscriptionsChannels={props.arrCountSubscriptionsChannels}
        />
      )}
      {isModalOpen &&
        ReactDOM.createPortal(
          <CreatePostModal
            avatarChannelID={props.avatarChannelID}
            channelName={props.channelName}
            openModal={openModal}
            channelId={props.channelId}
          />,
          postModalNode
        )}
    </div>
  );
}

export default observer(ArticlesForMyChannel);