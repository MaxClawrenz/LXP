import { Link } from "react-router-dom";
import { IChannelElement } from "../../../interfaces/IChannelElement";
import styles from "../../../style.module.css";

function ChannelElement(props: IChannelElement) {
  return (
    <li className={styles.ChannelElement}>
      <Link
        to={`/_wt/lxp_channels/${props.channel_id}`}
        className={styles.AutorName}
      >
        <img
          className={styles.channelIconLeft}
          width={20}
          height={20}
          src={`/download_file.html?file_id=${props.pict_id}`}
          alt=""
        />
        <span className={styles.AutorName}>{props.name}</span>
      </Link>
    </li>
  );
}

export default ChannelElement;
