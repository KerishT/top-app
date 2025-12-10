import clsx from "clsx";
import styles from "./Comments.module.css";
import { CommentsProps } from "./Comments.props";
import { Htag } from "@/components";
import parse from "html-react-parser";

export const Comments = ({ comments, className, ...props }: CommentsProps) => {
  return (
    <div className={clsx(className, styles.comments)} {...props}>
      <Htag tag="h2">Комментарии</Htag>

      {comments && (
        <ul className={styles.commentsList}>
          {comments.map(comment => (
            <li key={comment.id} className={styles.commentsItem}>
              <header className={styles.commentsItemHeader}>
                <span className={styles.commentsItemName}>{comment.name}</span>
                <span>{comment.email}</span>
              </header>
              <div>{parse(comment.body)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
