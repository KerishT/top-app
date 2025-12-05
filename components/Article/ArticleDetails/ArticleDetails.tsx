import clsx from "clsx";
import Image from "next/image";
import { Htag } from "../../Htag/Htag";
import { Likes } from "../../Likes/Likes";
import styles from "./ArticleDetails.module.css";
import parse from "html-react-parser";
import { ArticleDetailsProps } from "./ArticleDetails.props";

export const ArticleDetails = ({
  id,
  userId,
  image = "/image-placehold.svg",
  tag = "Front-end",
  date = "1 месяц назад",
  title,
  likes = 4,
  body,
  timeToRead = "3 минуты",
  className,
  ...props
}: ArticleDetailsProps) => {
  const hasInfo = tag && date && likes;

  return (
    <div className={clsx(styles.ArticleDetails, className)} {...props}>
      <Htag className={styles.title} tag="h1">
        {title}
      </Htag>

      {hasInfo && (
        <div className={clsx(styles.info)}>
          <span>{tag}</span>

          <span>{date}</span>

          <span>{timeToRead}</span>

          <Likes likes={likes} />
        </div>
      )}

      {image && (
        <div className={styles.image}>
          <Image width={600} height={400} src={image} alt="Article image" />
        </div>
      )}

      <div className={clsx(styles.content)}>{parse(body)}</div>
    </div>
  );
};
