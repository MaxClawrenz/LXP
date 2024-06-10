import style from "../../../style.module.css";

function CloseIcon() {
  return (
    <svg
      className={style.CloseIcon}
      width="18"
      height="18"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L20 20"
        stroke="#606060"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 2L2 20"
        stroke="#606060"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CloseIcon;
