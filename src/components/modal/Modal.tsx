import { FC } from "react";
import { IModalProps } from "./modal.interface";

import Button from "../button/Button";
import styles from "./modal.module.scss";

const Modal: FC<IModalProps> = ({ open, onClose }): JSX.Element | null => {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil
        iusto quod! Reiciendis ipsa optio distinctio autem, amet repellat
        cupiditate?
        <Button onClick={onClose}>Закрити</Button>
      </div>
    </div>
  );
};

export default Modal;
