import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import { IHeading } from "./heading.interface";

import style from "./heading.module.scss";

const Heading: FC<PropsWithChildren<IHeading>> = (props): JSX.Element => {
  return (
    <props.type
      className={classNames(style.title, props.className, style[props.type])}
    >
      {props.children}
    </props.type>
  );
};

export default Heading;
