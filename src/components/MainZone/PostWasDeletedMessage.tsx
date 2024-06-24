import { useNavigate } from "react-router-dom";
import style from "../../style.module.css";
import NotFoundIcon from "./MainIcons/NotFoundIcon";

function PostWasDeletedMessage() {
  const navigate = useNavigate();
  return (
    <div className={style.PostWasDeletedMessage}>
      <NotFoundIcon text={"Пост уже удалили"} width={""} />
      <div onClick={() => navigate(-1)} className={style.goBack}>
        Назад
      </div>
    </div>
  );
}

export default PostWasDeletedMessage;
