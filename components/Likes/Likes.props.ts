import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface LikesProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  likes?: number;
}
