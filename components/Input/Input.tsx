import clsx from "clsx";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({ className, ref, ...props }: InputProps) => {
  return (
    <input className={clsx(className, styles.input)} ref={ref} {...props} />
  );
};
