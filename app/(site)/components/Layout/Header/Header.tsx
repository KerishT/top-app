"use client";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Logo from "../icons/logo.svg";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import clsx from "clsx";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import { usePathname } from "next/navigation";

const variants = {
  opened: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 20,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();

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
        {/* <Sidebar /> */}

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
