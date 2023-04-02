import { HTMLAttributes, PropsWithChildren } from "react";
export interface IHeading
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}
