import styles from "./ArticleList.module.css";
import clsx from "clsx";
import { ArticleListProps } from "./ArticleList.props";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { Card } from "@/components/Card/Card";

export const ArticleList = ({
  articles,
  className,
  ...props
}: ArticleListProps) => {
  return (
    <div className={clsx(styles.articleList, className)} {...props}>
      {articles.map((article, idx) => (
        <Card key={idx}>
          <ArticleListItem {...article} />
        </Card>
      ))}
    </div>
  );
};
