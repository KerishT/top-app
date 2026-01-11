import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance = "primary",
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      whileHover={{ scale: 1.05 }}
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
    </motion.button>
  );
};
