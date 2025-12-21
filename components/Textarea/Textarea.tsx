import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import clsx from "clsx";

export const Textarea = ({
  className,
  error,
  ref,
  ...props
}: TextareaProps) => {
  return (
    <div className={clsx(styles.textareaWrapper, className)}>
      <textarea
        className={clsx(styles.textarea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
