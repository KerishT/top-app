"use client";
import clsx from "clsx";
import { format } from "date-fns";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { useGithub } from "@/app/(site)/contexts";

export const Footer = ({ className, ...props }: FooterProps) => {
  const githubLink = useGithub();

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>

      <a href={githubLink} target="_blank">
        Пользовательское соглашение
      </a>

      <a href={githubLink} target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
