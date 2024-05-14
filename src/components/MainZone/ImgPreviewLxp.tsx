import DeleteImgIconLxp from "./MainIcons/DeleteImgIconLxp";
import styles from "../../style.module.css";

interface ImgPreviewProps {
  url: string;
  index: number;
  filesArr: File[];
  setFilesArr: React.Dispatch<React.SetStateAction<File[]>>;
}

function ImgPreviewLxp(props: ImgPreviewProps) {
  const removePict = () => {
    const newArray = props.filesArr.filter(
      (item, index) => index !== props.index
    );
    props.setFilesArr(newArray);
  };

  return (
    <div className={styles.imgPrev}>
      <img
        className={styles.imgPreviewIcon}
        src={props.url}
        alt=""
        width={"50"}
        height={"50"}
      />
      <div onClick={removePict} className={styles.deleteImg}>
        <DeleteImgIconLxp />
      </div>
    </div>
  );
}

export default ImgPreviewLxp;
