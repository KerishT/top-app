import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import clsx from "clsx";

export const Htag = ({ tag: Tag = "h1", className, children }: HtagProps) => {
  return <Tag className={clsx(styles[Tag], className)}>{children}</Tag>;
};
