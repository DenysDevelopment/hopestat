import { HTMLAttributes, PropsWithChildren } from "react";
export interface IButton
  extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  children: string;
  className?: string;
  href?: string;
  link?: boolean;
}
