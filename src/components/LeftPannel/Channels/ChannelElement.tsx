import { IChannelElement } from "../../../interfaces/IChannelElement";
import styles from "../../../style.module.css";

function ChannelElement(props: IChannelElement) {
  return (
    <li className={styles.ChannelElement}>
      <img
        className={styles.channelIconLeft}
        width={20}
        height={20}
        src={props.pict_url}
        alt=""
      />
      {props.name}
    </li>
  );
}

export default ChannelElement;
