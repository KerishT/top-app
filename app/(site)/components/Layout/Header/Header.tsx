"use client";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Logo from "../icons/logo.svg";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import clsx from "clsx";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import { usePathname } from "next/navigation";

export const Header = ({ className, ...props }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const shouldReduceMotions = useReducedMotion();

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotions ? 1 : 0,
      x: "100%",
    },
  };

  return (
    <header
      key={pathname}
      className={clsx(className, styles.header)}
      {...props}
    >
      <Logo />

      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />

      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar showMenu={false} />

        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
