import { useCallback, useEffect, useState } from "react";
import style from "../../style.module.css";
import { Link, useLocation } from "react-router-dom";
import BackIcon from "./MainIcons/BackIcon";
import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import { observer } from "mobx-react-lite";
import postBody from "../../store/postBody";
import PostImages from "./PostImages";
import PostFooter from "./PostFooter";
import UniversalSkelet from "./UniversalSkelet";
import CommentsZone from "./CommentsZone";
import parse from "html-react-parser";
import PostManageButton from "./PostManageButton";
import PostWasDeletedMessage from "./PostWasDeletedMessage";
import ReactDOM from "react-dom";
import ImageViewer from "react-simple-image-viewer";

function PostZone() {
  const { hours, minutes } = useTime(postBody.post.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);
  const [imagesArray, setImagesArray] = useState<string[]>([]);

  // вставляю Imageviwer
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  function collectImagesFromDiv(post_content: string) {
    const imagesArray = [];
    const divElement = document.getElementById(post_content);
    if (divElement) {
      const imgElements = divElement.getElementsByTagName("img");
      for (let i = 0; i < imgElements.length; i++) {
        imagesArray.push(imgElements[i].src);
        imgElements[i].addEventListener("click", () => openImageViewer(i));
      }
    }

    return imagesArray;
  }

  useEffect(() => {
    if (postBody.post) {
      setImagesArray(collectImagesFromDiv("post_content"));
    }
  }, [postBody.post]);

  const img_node = document.querySelector("#img_preview");
  if (!img_node) return null;

  const location = useLocation();
  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const id = pathArr[pathArr.length - 1];

    postBody.isLoading = true;
    postBody.getPostObject(id);
  }, []);

  return (
    <>
      {postBody.post ? (
        <div className={style.MainZone}>
          <div className={style.postBody}>
            <div className={style.topZone}>
              <div className={style.cardHeader}>
                <div className={style.leftHeader}>
                  <div className={style.backBlock}>
                    <BackIcon />
                  </div>
                  <Link to={`/_wt/lxp_channels/${postBody.post.channel_id}`}>
                    <div className={style.channelBlock}>
                      {!postBody.isLoading ? (
                        <img
                          className={style.channelPict}
                          src={postBody.post.channel_pict}
                          alt="Картинка канала"
                        />
                      ) : (
                        <UniversalSkelet
                          width={"20px"}
                          height={"20px"}
                          marginTop={""}
                          marginBottom={""}
                          marginLeft={""}
                          marginRight={"11px"}
                          paddingTop={""}
                          paddingBottom={""}
                          paddingLeft={""}
                          paddingRight={""}
                          borderRadius={"4px"}
                        />
                      )}
                      <div className={style.channelName}>
                        {!postBody.isLoading ? (
                          postBody.post.channel_name
                        ) : (
                          <UniversalSkelet
                            width={"104px"}
                            height={"17px"}
                            marginTop={""}
                            marginBottom={""}
                            marginLeft={""}
                            marginRight={""}
                            paddingTop={""}
                            paddingBottom={""}
                            paddingLeft={""}
                            paddingRight={""}
                            borderRadius={"4px"}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                  <div className={style.cardKnowledge}>
                    {!postBody.isLoading ? (
                      postBody.post.knowledge_name
                    ) : (
                      <UniversalSkelet
                        width={"260px"}
                        height={"17px"}
                        marginTop={""}
                        marginBottom={""}
                        marginLeft={""}
                        marginRight={"50px"}
                        paddingTop={""}
                        paddingBottom={""}
                        paddingLeft={""}
                        paddingRight={""}
                        borderRadius={"4px"}
                      />
                    )}
                    {isViewerOpen &&
                      ReactDOM.createPortal(
                        <ImageViewer
                          src={imagesArray}
                          currentIndex={currentImage}
                          disableScroll={false}
                          closeOnClickOutside={true}
                          onClose={closeImageViewer}
                        />,
                        img_node
                      )}
                  </div>
                  <div className={style.cardTime}>
                    {!postBody.isLoading ? (
                      hours > 24 ? (
                        postBody.post.create_date
                      ) : hours < 24 && hours ? (
                        `${hours} ${hoursName}`
                      ) : minutes ? (
                        `${minutes} ${minutesName}`
                      ) : (
                        "1 минута"
                      )
                    ) : (
                      <UniversalSkelet
                        width={"76px"}
                        height={"17px"}
                        marginTop={""}
                        marginBottom={""}
                        marginLeft={""}
                        marginRight={""}
                        paddingTop={""}
                        paddingBottom={""}
                        paddingLeft={""}
                        paddingRight={""}
                        borderRadius={"4px"}
                      />
                    )}
                  </div>
                </div>
                <PostManageButton
                  postId={postBody.post.id}
                  is_my_blog={postBody.post.is_my_blog}
                />
              </div>
              <div className={style.cardTitle}>
                {!postBody.isLoading ? (
                  postBody.post.post_name
                ) : (
                  <UniversalSkelet
                    width={"100%"}
                    height={"24px"}
                    marginTop={""}
                    marginBottom={"15px"}
                    marginLeft={""}
                    marginRight={""}
                    paddingTop={""}
                    paddingBottom={""}
                    paddingLeft={""}
                    paddingRight={""}
                    borderRadius={"4px"}
                  />
                )}
              </div>
            </div>
            <div className={style.postText}>
              <pre id="post_content" className={style.bodyText}>
                {!postBody.isLoading ? (
                  parse(postBody.post.post_text)
                ) : (
                  <>
                    <UniversalSkelet
                      width={"100%"}
                      height={"16px"}
                      marginTop={"16px"}
                      marginBottom={"2px"}
                      marginLeft={""}
                      marginRight={""}
                      paddingTop={""}
                      paddingBottom={""}
                      paddingLeft={""}
                      paddingRight={""}
                      borderRadius={"4px"}
                    />
                    <UniversalSkelet
                      width={"80%"}
                      height={"16px"}
                      marginTop={""}
                      marginBottom={"16px"}
                      marginLeft={""}
                      marginRight={""}
                      paddingTop={""}
                      paddingBottom={"4px"}
                      paddingLeft={""}
                      paddingRight={""}
                      borderRadius={"4px"}
                    />
                  </>
                )}
              </pre>
            </div>
            {!postBody.isLoading && postBody.post.file_id && (
              <PostImages fileIds={postBody.post.file_id} />
            )}
            <PostFooter
              id={postBody.post.id}
              my_like={postBody.post.my_like}
              likes_count={postBody.post.likes_count}
              comments_count={postBody.commentsCount}
              my_favourite={postBody.post.my_favourite}
              favourite_count={postBody.post.favourite_count}
            />
          </div>
          <CommentsZone
            id={postBody.post.id}
            comments_count={postBody.commentsCount}
            blog_id={postBody.post.blog_id}
          />
        </div>
      ) : null}
      {!postBody.post ? (
        <div className={style.MainZone}>
          <PostWasDeletedMessage />
        </div>
      ) : null}
    </>
  );
}

export default observer(PostZone);
