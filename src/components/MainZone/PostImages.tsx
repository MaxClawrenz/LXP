import style from "../../style.module.css";

function PostImages({ fileIds }: { fileIds: string }) {
  const idsArr = fileIds.split(";");

  return (
    <div className={style.postImages}>
      {idsArr.map((id) => {
        if (id)
          return (
            <img
              key={id}
              className={style.postImage}
              alt={id}
              src={`/download_file.html?file_id=${id}`}
            />
          );
      })}
    </div>
  );
}

export default PostImages;
