import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import clsx from "clsx";

export const Button = ({
  appearance = "primary",
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}

      {arrow !== "none" && (
        <span
          className={clsx(styles.arrow, { [styles.down]: arrow === "down" })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
