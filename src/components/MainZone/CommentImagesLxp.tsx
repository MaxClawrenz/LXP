import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import style from "../../style.module.css";

export function CommentImagesLxp(props: any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images =
    typeof props.file_ids === "string" ? props.file_ids.split(";") : [];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  if (images.length === 0) return null;

  const img_node = document.querySelector("#img_preview");
  if (!img_node) return null;

  return (
    <div className={style.img_veiw}>
      {images.map((file: string, index: number) => (
        <img
          className={style.comment_img}
          src={file}
          alt={`Image ${index + 1}`}
          onClick={() => openImageViewer(index)}
          key={index}
        />
      ))}
      {isViewerOpen &&
        ReactDOM.createPortal(
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            key={currentImage}
          />,
          img_node
        )}
    </div>
  );
}

export default CommentImagesLxp;
