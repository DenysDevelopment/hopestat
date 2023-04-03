import { API_URL } from "@/config/api.config";
import classNames from "classnames";
import { FC, forwardRef } from "react";
import ErrorMessageField from "./ErrorMessageField";
import { IField } from "./field.interface";

import styles from "./field.module.scss";
import IconField from "./IconField";
console.log(API_URL);
const Field: FC<IField> = forwardRef<HTMLInputElement, IField>(
  (
    { type = "text", icon, error, placeholder, className, ...rest },
    ref
  ): JSX.Element => {
    return (
      <>
        <div
          className={classNames(styles.wrap, className, {
            // [styles.errorField]: error,
          })}
        >
          <IconField icon={icon} />
          <input
            ref={ref}
            className={classNames(styles.input, {
              [styles.errorInput]: error,
            })}
            {...rest}
            type={type}
            placeholder={placeholder}
          />
          <ErrorMessageField message={error} />
        </div>
      </>
    );
  }
);

Field.displayName = "Field";

export default Field;
