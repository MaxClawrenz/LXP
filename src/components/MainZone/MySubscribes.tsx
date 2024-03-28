import { useEffect } from "react";
import mySubscriptions from "../../store/mySubscriptions";
import { observer } from "mobx-react-lite";
import style from "../../style.module.css";
import SubscribeElement from "./SubscribeElement";
import RecommendChannel from "./RecommendChannel";
import NotFoundIcon from "./MainIcons/NotFoundIcon";
import UniversalSkelet from "./UniversalSkelet";

function MySubscribes() {
  useEffect(() => {
    mySubscriptions.isLoading = true;
    mySubscriptions.isLoadingRecommends = true;
    mySubscriptions.getMySubscriptions();
    mySubscriptions.getRecommendChannels();
  }, []);

  return (
    <div className={style.subscription_block}>
      <ul className={style.subscription_list}>
        {mySubscriptions.isLoading && (
          <li className={style.subscribe_element}>
            <UniversalSkelet
              width={"100%"}
              height={"24px"}
              marginTop={"0px"}
              marginBottom={"0px"}
              marginLeft={"0px"}
              marginRight={"0px"}
              paddingTop={"20px"}
              paddingBottom={"20px"}
              paddingLeft={"20px"}
              paddingRight={"20px"}
              borderRadius={"4px"}
            />
          </li>
        )}
        {!mySubscriptions.isLoading &&
          mySubscriptions.subsArr &&
          mySubscriptions.subsArr.map((sub) => (
            <SubscribeElement
              id={sub.id}
              pict_url={sub.pict_url}
              name={sub.name}
            />
          ))}
      </ul>
      <div className={style.recommend_title}>Рекомендации</div>
      <ul className={style.recommends_list}>
        {mySubscriptions.isLoadingRecommends && (
          <li className={style.recommend_element}>
            <UniversalSkelet
              width={"100%"}
              height={"24px"}
              marginTop={"0px"}
              marginBottom={"0px"}
              marginLeft={"0px"}
              marginRight={"0px"}
              paddingTop={"20px"}
              paddingBottom={"20px"}
              paddingLeft={"20px"}
              paddingRight={"20px"}
              borderRadius={"4px"}
            />
          </li>
        )}
        {!mySubscriptions.isLoadingRecommends &&
          mySubscriptions.recommendsArr.length > 0 &&
          mySubscriptions.recommendsArr.map((channel) => (
            <RecommendChannel
              name={channel.name}
              desc={channel.desc}
              channel_id={channel.channel_id}
              pict_id={channel.pict_id}
              is_follow={channel.is_follow}
            />
          ))}
        {!mySubscriptions.isLoadingRecommends &&
          mySubscriptions.recommendsArr.length === 0 && (
            <NotFoundIcon text={"Нет рекомендованных каналов"} width={""} />
          )}
      </ul>
    </div>
  );
}

export default observer(MySubscribes);
