import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ArticleListItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  userId: number;
  image?: string;
  tag?: string;
  date?: string;
  title: string;
  likes?: number;
  body: string;
  timeToRead?: string;
}
