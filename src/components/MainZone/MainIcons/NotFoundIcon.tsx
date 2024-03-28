import { useEffect, useRef, useState } from "react";
import style from "../../../style.module.css";

function NotFoundIcon({ text, width }: { text: string; width: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgWidth, setWidth] = useState(0);

  useEffect(() => {
    const img = imgRef.current;

    function handleImgLoad() {
      if (img) setWidth(80);
    }

    if (img) {
      if (img.complete) {
        handleImgLoad();
      } else {
        img.addEventListener("load", handleImgLoad);
      }
    }

    return () => {
      if (img) img.removeEventListener("load", handleImgLoad);
    };
  }, []);

  return (
    <div className={style.NotFoundIcon} style={{ width: width }}>
      <img
        ref={imgRef}
        className={style.NotFoundImg}
        src="/eqvatoria/img/lxp/not_found_recommends.webp"
        width={imgWidth}
        height={80}
        alt=""
      />
      <div className={style.NotFoundText}>{text}</div>
    </div>
  );
}

export default NotFoundIcon;
