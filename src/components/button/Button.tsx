import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

import { IButton } from "./button.interface";
import styles from "./button.module.scss";

const Button: FC<IButton> = ({
  href,
  children,
  className,
  link,
  ...rest
}): JSX.Element => {
  return (
    <>
      {href ? (
        <Link
          className={classNames(
            styles.btn,
            {
              [styles.link]: link,
            },
            className
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button className={classNames(styles.btn, className)} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
