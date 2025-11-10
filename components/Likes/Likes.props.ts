import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface LikesProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  likes?: number;
  initialIsLiked?: boolean;
}
