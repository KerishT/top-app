import { LikesProps } from "./Likes.props";
import styles from "./Likes.module.css";
import LikeIcon from "./like.svg";
import clsx from "clsx";

export const Likes = ({ likes, onClick, className, ...props }: LikesProps) => {
  return (
    <button
      className={clsx(styles.likes, className)}
      onClick={onClick}
      {...props}
    >
      <span className={clsx(styles.counter)}>{likes}</span>

      <LikeIcon />
    </button>
  );
};
