import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import clsx from "clsx";

export const Card = ({
  color = "white",
  children,
  className,
  ref,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(styles.card, className, styles[color])}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
