import { useNavigate } from "react-router-dom";
import style from "../../../style.module.css";

function BackIcon() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <svg
      onClick={goBack}
      className={style.BackIcon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        transform="rotate(-180 12 12)"
        fill="#EBEBEB"
      />
      <path d="M14 16L9 11.5L14 7" stroke="#6D6D6D" stroke-linecap="round" />
    </svg>
  );
}

export default BackIcon;
