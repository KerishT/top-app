import { PProps } from "./P.props";
import styles from "./P.module.css";
import clsx from "clsx";

export const P = ({ size = "m", children, className, ...props }: PProps) => {
  return (
    <p className={clsx(styles.p, className, styles[size])} {...props}>
      {children}
    </p>
  );
};
