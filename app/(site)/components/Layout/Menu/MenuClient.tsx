"use client";
import { firstLevelMenu, routeToCategoryMap } from "@/helpers";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { MenuClientProps } from "./Menu.props";

export const MenuClient = ({ menus }: MenuClientProps) => {
  const pathname = usePathname();
  const type = pathname.split("/")[1];
  const firstCategory = routeToCategoryMap[type] ?? TopLevelCategory.Courses;

  const [menu, setMenu] = useState<MenuItem[]>(menus[firstCategory]);

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    setMenu(menus[firstCategory]);
  }, [firstCategory, menus]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu(prev =>
      prev.map(m =>
        m._id.secondCategory === secondCategory
          ? { ...m, isOpened: !m.isOpened }
          : m
      )
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) =>
    pages.map(p => {
      const link = `/${route}/${p.alias}`;

      return (
        <motion.div key={p._id} variants={variantsChildren}>
          <Link
            key={p._id}
            href={link}
            className={clsx(styles.thirdLevel, {
              [styles.thirdLevelActive]: link === pathname,
            })}
          >
            {p.category}
          </Link>
        </motion.div>
      );
    });

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
    <div className={styles.secondBlock}>
      {menu.map(m => {
        const activePage = pathname.split("/")[2];
        const shouldOpen = m.pages.some(p => p.alias === activePage);

        if (shouldOpen) m.isOpened = true;

        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>

            <motion.div
              layout
              variants={variants}
              initial={m.isOpened ? "visible" : "hidden"}
              animate={m.isOpened ? "visible" : "hidden"}
              className={clsx(styles.secondLevelBlock)}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </motion.div>
          </div>
        );
      })}
    </div>
  );

  const buildFirstLevel = () => (
    <>
      {firstLevelMenu.map(m => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={clsx(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>

          {m.id === firstCategory && buildSecondLevel(m)}
        </div>
      ))}
    </>
  );

  return <nav>{buildFirstLevel()}</nav>;
};
