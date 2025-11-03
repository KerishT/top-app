import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import clsx from "clsx";

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
};
