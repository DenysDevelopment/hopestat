import Image from "next/image";
import { ChangeEvent, FC, useState } from "react";
import { IconImgAdd } from "../../../../public/assets/icons";
import styles from "./fileUpload.module.scss";
import { IFileProps } from "./file.interface";

const FileUpload: FC<IFileProps> = ({ label }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files?.length) return;
    const file = files[0];
    const fileData = new FileReader();
    fileData.readAsDataURL(file);
    fileData.onload = () => {
      setImgUrl(fileData.result?.toString());
    };
  };
  return (
    <div className={styles.file}>
      {imgUrl?.length ? (
        <Image
          className={styles.img}
          src={imgUrl}
          width="500"
          height="250"
          alt={label}
        />
      ) : (
        <>
          <input
            type="file"
            className={styles.input}
            accept="image/*"
            onChange={handleInput}
          />
          <div className={styles.icon}>
            <IconImgAdd />
          </div>
          <div className={styles.label}>{label}</div>
        </>
      )}
    </div>
  );
};

export default FileUpload;
