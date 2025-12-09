import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import clsx from "clsx";

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={clsx(className, styles.textarea)} {...props} />;
};
