import { IUniversalSkelet } from "../../interfaces/IUniversalSkelet";
import style from "../../style.module.css";

function UniversalSkelet(props: IUniversalSkelet) {
  return (
    <div
      className={style.UniversalSkelet}
      style={{
        width: props.width,
        height: props.height,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        borderRadius: props.borderRadius,
      }}
    ></div>
  );
}

export default UniversalSkelet;
