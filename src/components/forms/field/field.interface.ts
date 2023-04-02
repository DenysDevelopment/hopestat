import { HTMLAttributes, PropsWithChildren } from "react";

export interface IField
  extends PropsWithChildren<HTMLAttributes<HTMLInputElement>> {
  icon?: JSX.Element;
  type?: string;
  error?: string;
}

export interface IErorrField {
  message?: string;
}

export interface IIconField {
  icon?: JSX.Element;
}
