import { LikesProps } from "./Likes.props";
import styles from "./Likes.module.css";
import LikeIcon from "./like.svg";
import clsx from "clsx";
import { useState, MouseEvent } from "react";

export const Likes = ({
  likes,
  initialIsLiked,
  onClick,
  className,
  ...props
}: LikesProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isLiked) {
      setIsLiked(true);

      onClick?.(e);
    }
  };

  return (
    <button
      className={clsx(styles.likes, className, { [styles.liked]: isLiked })}
      onClick={handleClick}
      {...props}
    >
      <span className={clsx(styles.counter)}>{likes}</span>

      <LikeIcon />
    </button>
  );
};
