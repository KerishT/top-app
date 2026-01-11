import clsx from "clsx";
import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps) => {
  const IconComp = icons[icon];

  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.white]: appearance == "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
