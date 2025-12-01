import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Htag } from "../../Htag/Htag";
import { Likes } from "../../Likes/Likes";
import ArrowIcon from "./arrow.svg";
import styles from "./ArticleDetails.module.css";
import { ArticleDetailsProps } from "./ArticleDetails.props";

export const ArticleDetails = ({
  id,
  userId,
  image,
  tag,
  date,
  title,
  likes,
  body,
  timeToRead,
  className,
  ...props
}: ArticleDetailsProps) => {
  const hasInfo = tag && date && likes;

  return (
    <div className={clsx(styles.ArticleDetails, className)} {...props}>
      {image && (
        <header>
          <Image
            className={styles.logo}
            width={330}
            height={220}
            src={image}
            alt="Article image"
          />
        </header>
      )}

      <div className={clsx(styles.body)}>
        {hasInfo && (
          <div className={clsx(styles.info)}>
            <div className={clsx(styles.infoStart)}>
              {tag}

              {date}
            </div>

            <div className={clsx(styles.infoEnd)}>
              <Likes likes={likes} />
            </div>
          </div>
        )}

        <Htag tag="h3">{title}</Htag>

        <span>{body}</span>
      </div>
    </div>
  );
};
