import { useEffect } from "react";
import mySubscriptions from "../../store/mySubscriptions";
import { observer } from "mobx-react-lite";
import style from "../../style.module.css";
import SubscribeElement from "./SubscribeElement";

function MySubscribes() {
  useEffect(() => {
    mySubscriptions.isLoading = true;
    mySubscriptions.getMySubscriptions();
  }, []);

  return (
    <div className={style.subscription_block}>
      <ul className={style.subscription_list}>
        {mySubscriptions.isLoading && "Loading..."}
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
    </div>
  );
}

export default observer(MySubscribes);
