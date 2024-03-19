import { useEffect } from "react";
import style from "../../style.module.css";
import { Link, useLocation } from "react-router-dom";
import BackIcon from "./MainIcons/BackIcon";
import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import { observer } from "mobx-react-lite";
import postBody from "../../store/postBody";
import PostImages from "./PostImages";

function PostZone() {
  const { hours, minutes } = useTime(postBody.post.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);

  const location = useLocation();
  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const id = pathArr[pathArr.length - 1];

    postBody.isLoading = true;
    postBody.getPostObject(id);
  }, []);

  return (
    <div className={style.MainZone}>
      <div className={style.postBody}>
        <div className={style.topZone}>
          <div className={style.cardHeader}>
            <div className={style.leftHeader}>
              <div className={style.backBlock}>
                <BackIcon />
              </div>
              <Link
                to={`/_wt/eqvatoria_lxp_channels/${postBody.post.channel_id}`}
              >
                <div className={style.channelBlock}>
                  <img
                    className={style.channelPict}
                    src={postBody.post.channel_pict}
                    alt="Картинка канала"
                  />
                  <div className={style.channelName}>
                    {postBody.post.channel_name}
                  </div>
                </div>
              </Link>
              <div className={style.cardKnowledge}>
                {postBody.post.knowledge_name}
              </div>
              <div className={style.cardTime}>
                {hours > 24
                  ? postBody.post.create_date
                  : hours < 24 && hours
                  ? `${hours} ${hoursName}`
                  : minutes
                  ? `${minutes} ${minutesName}`
                  : "1 минута"}
              </div>
            </div>
          </div>
          <div className={style.cardTitle}>{postBody.post.post_name}</div>
        </div>
        <div className={style.postText}>
          <pre className={style.bodyText}>{postBody.post.post_text}</pre>
        </div>
        {postBody.post.file_id && (
          <PostImages fileIds={postBody.post.file_id} />
        )}
      </div>
    </div>
  );
}

export default observer(PostZone);
