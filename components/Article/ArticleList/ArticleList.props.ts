import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ArticleListItemProps } from "../ArticleListItem/ArticleListItem.props";

export interface ArticleListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  articles: ArticleListItemProps[];
}
