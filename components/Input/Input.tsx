import clsx from "clsx";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";

export const Input = ({ className, error, ref, ...props }: InputProps) => {
  return (
    <div className={clsx(className, styles.inputWrapper)}>
      <input
        className={clsx(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
