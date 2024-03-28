import { useState } from "react";
import { IRecommend } from "../../interfaces/IRecommend";
import style from "../../style.module.css";
import RecommendButtonSubscribe from "./RecommendButtonSubscribe";
import RecommendButtonUnsubscribe from "./RecommendButtonUnsubscribe";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "framer-motion";

function RecommendChannel(props: IRecommend) {
  const [isFollow, setFollow] = useState<boolean>(props.is_follow);

  return (
    <AnimatePresence>
      <motion.li
        initial={{ height: 0, opacity: 0 }}
        animate={{ minHeight: "74px", height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        style={{ overflow: "hidden" }}
        className={style.recommend_element}
      >
        <div className={style.recommend_left}>
          <div className={style.recommend_icon}>
            <img
              className={style.recommend_icon_img}
              src={`/download_file.html?file_id=${props.pict_id}`}
              alt="Картинка канала"
              width={30}
              height={30}
            />
          </div>
          <div>
            <div className={style.channel_name}>{props.name}</div>
            <div className={style.channel_desc}>{props.desc}</div>
          </div>
        </div>
        {!isFollow && (
          <RecommendButtonSubscribe
            setFollow={setFollow}
            channel_id={props.channel_id}
          />
        )}
        {isFollow && (
          <RecommendButtonUnsubscribe
            setFollow={setFollow}
            channel_id={props.channel_id}
          />
        )}
      </motion.li>
    </AnimatePresence>
  );
}

export default observer(RecommendChannel);
