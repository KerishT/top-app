import clsx from "clsx";
import { format } from "date-fns";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>

      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>

      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
