import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import style from "../../style.module.css";
import ReactDOM from "react-dom";

function PostImages({ fileIds }: { fileIds: string }) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const idsArr = fileIds.split(";").filter((str) => str.trim() !== "");
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const img_node = document.querySelector("#img_preview");
  if (!img_node) return null;

  return (
    <div className={style.postImages}>
      {idsArr.map((id, index) => {
        if (id)
          return (
            <img
              key={id}
              className={style.postImage}
              alt={id}
              onClick={() => openImageViewer(index)}
              src={id}
            />
          );
      })}
      {isViewerOpen &&
        ReactDOM.createPortal(
          <ImageViewer
            src={idsArr}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />,
          img_node
        )}
    </div>
  );
}

export default PostImages;
