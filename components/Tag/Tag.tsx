import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import clsx from "clsx";

export const Tag = ({
  size = "m",
  color = "ghost",
  href,
  children,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(styles.tag, className, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
