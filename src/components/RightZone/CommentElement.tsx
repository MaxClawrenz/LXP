import useTime from "../../hooks/useTime";
import useTimeName from "../../hooks/useTimeName";
import { IComment } from "../../interfaces/IComment";
import style from "../../style.module.css";

function CommentElement(props: IComment) {
  const { hours, minutes } = useTime(props.time_posted);
  const hoursName = useTimeName(hours, ["час", "часа", "часов"]);
  const minutesName = useTimeName(minutes, ["минута", "минуты", "минут"]);
  return (
    <div className={style.comment_element}>
      <div className={style.comment_header}>
        <div className={style.comment_header_left}>
          <div className={style.author_pict}>
            <img
              className={style.author_pict_img}
              src={`/person_icon.html?id=${props.person_id}&type=150x150`}
              alt=""
            />
          </div>
          <div className={style.author_fullname}>
            <a
              className={style.AutorName}
              href={`/_wt/${props.person_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={style.AutorName}>
                {`${props.person_fullname.split(" ")[0]} ${
                  props.person_fullname.split(" ")[1]
                }`}
              </span>
            </a>
          </div>
        </div>
        <div className={style.comment_time}>
          {hours > 24
            ? props.create_date
            : hours < 24 && hours
            ? `${hours} ${hoursName}`
            : minutes
            ? `${minutes} ${minutesName}`
            : "1 минута"}
        </div>
      </div>
      <div className={style.comment_text}>{props.message}</div>
      <div className={style.post_name}>{props.post_name}</div>
    </div>
  );
}

export default CommentElement;
