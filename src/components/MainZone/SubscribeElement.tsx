import { ISubscribeElement } from "../../interfaces/ISubscribeElement";
import style from "../../style.module.css";
import SubscribeIcon from "./MainIcons/SubscribeIcon";
import { useState } from "react";
import UnsubscribeIcon from "./MainIcons/UnsubscribeIcon";
import news from "../../store/news";
import { observer } from "mobx-react-lite";
import mySubscriptions from "../../store/mySubscriptions";
import popularAutors from "../../store/popularAutors";

function SubscribeElement(props: ISubscribeElement) {
  const [hoverIcon, setHoverIcon] = useState<boolean>(false);

  function unfollow() {
    news.blogFollow(props.id);
    mySubscriptions.unfollow(props.id);
    popularAutors.getPopularAutors();
  }

  return (
    <li className={style.subscribe_element}>
      <div className={style.subscribe_left_zone}>
        <img className={style.channel_icon} width={20} src={props.pict_url} />
        <span className={style.channel_name}>{props.name}</span>
      </div>
      <div
        onClick={unfollow}
        onMouseOver={() => {
          setHoverIcon(true);
        }}
        onMouseOut={() => {
          setHoverIcon(false);
        }}
        className={style.subscribe_button}
      >
        {!hoverIcon && <SubscribeIcon />}
        {hoverIcon && <UnsubscribeIcon />}
      </div>
    </li>
  );
}

export default observer(SubscribeElement);
