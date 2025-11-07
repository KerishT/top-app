import { ArticleListItemProps } from "./ArticleListItem.props";
import Image from "next/image";
import styles from "./ArticleListItem.module.css";
import clsx from "clsx";
import ArrowIcon from "./arrow.svg";
import { Likes } from "../Likes/Likes";
import { Htag } from "../Htag/Htag";

export const ArticleListItem = ({
  image,
  tag,
  date,
  title,
  likes,
  description,
  timeToRead,
  href,
  className,
  ...props
}: ArticleListItemProps) => {
  return (
    <div className={clsx(styles.articleListItem, className)} {...props}>
      <header>
        <Image
          className={styles.logo}
          width={330}
          height={220}
          src={image}
          alt="Article image"
        />
      </header>

      <div className={clsx(styles.body)}>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.infoStart)}>
            {tag}

            {date}
          </div>

          <div className={clsx(styles.infoEnd)}>
            <Likes likes={likes} />
          </div>
        </div>

        <Htag tag="h3">{title}</Htag>

        <span>{description}</span>
      </div>

      <footer className={clsx(styles.footer)}>
        {timeToRead}

        <a className={clsx(styles.readMore)} href={href}>
          Читать {<ArrowIcon />}
        </a>
      </footer>
    </div>
  );
};
