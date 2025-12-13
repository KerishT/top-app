import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import clsx from "clsx";

export const Textarea = ({ className, ref, ...props }: TextareaProps) => {
  return (
    <textarea
      className={clsx(className, styles.textarea)}
      ref={ref}
      {...props}
    />
  );
};
