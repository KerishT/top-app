"use client";
import { Card } from "@/components/Card/Card";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";
import { ArticleListProps } from "./ArticleList.props";

export const ArticleList = ({
  articles,
  className,
  ...props
}: ArticleListProps) => {
  return (
    <div className={clsx(styles.articleList, className)} {...props}>
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <Card>
            <ArticleListItem {...article} />
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
