import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ArticleListItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string;
  tag: string;
  date: string;
  title: string;
  likes: number;
  description: string;
  timeToRead: string;
  href: string;
}
