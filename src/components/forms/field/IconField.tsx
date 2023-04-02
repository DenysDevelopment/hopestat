import { FC } from "react";
import { IIconField } from "./field.interface";

import styles from "./field.module.scss";

const IconField: FC<IIconField> = ({ icon }): JSX.Element => {
	return <span className={styles.icon}>{icon}</span>;
};

export default IconField;
