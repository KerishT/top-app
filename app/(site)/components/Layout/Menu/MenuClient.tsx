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
import { useEffect, useState, KeyboardEvent } from "react";
import styles from "./Menu.module.css";
import { MenuClientProps } from "./Menu.props";

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

export const MenuClient = ({ menus }: MenuClientProps) => {
  const pathname = usePathname();
  const type = pathname.split("/")[1];
  const firstCategory = routeToCategoryMap[type] ?? TopLevelCategory.Courses;

  const [menu, setMenu] = useState<MenuItem[]>(menus[firstCategory]);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  useEffect(() => {
    setMenu(menus[firstCategory]);
  }, [firstCategory, menus]);

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu(prev =>
      prev.map(m => {
        if (m._id.secondCategory == secondCategory) {
          setAnnounce(m.isOpened ? "closed" : "opened");
          m.isOpened = !m.isOpened;
        }
        return m;
      })
    );
  };

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) =>
    pages.map(p => {
      const link = `/${route}/${p.alias}`;

      return (
        <motion.li key={p._id} variants={variantsChildren}>
          <Link
            tabIndex={isOpened ? 0 : -1}
            key={p._id}
            href={link}
            className={clsx(styles.thirdLevel, {
              [styles.thirdLevelActive]: link === pathname,
            })}
            aria-current={link == pathname ? "page" : false}
          >
            {p.category}
          </Link>
        </motion.li>
      );
    });

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
    <ul className={styles.secondBlock}>
      {menu.map(m => {
        const activePage = pathname.split("/")[2];
        const shouldOpen = m.pages.some(p => p.alias === activePage);

        if (shouldOpen) m.isOpened = true;

        return (
          <li key={m._id.secondCategory}>
            <button
              tabIndex={0}
              onKeyDown={(key: KeyboardEvent) =>
                openSecondLevelKey(key, m._id.secondCategory)
              }
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
              aria-expanded={m.isOpened}
            >
              {m._id.secondCategory}
            </button>

            <motion.ul
              layout
              variants={variants}
              initial={m.isOpened ? "visible" : "hidden"}
              animate={m.isOpened ? "visible" : "hidden"}
              className={styles.secondLevelBlock}
            >
              {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
            </motion.ul>
          </li>
        );
      })}
    </ul>
  );

  const buildFirstLevel = () => (
    <ul className={styles.firstLevelList}>
      {firstLevelMenu.map(m => (
        <li key={m.route}>
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
        </li>
      ))}
    </ul>
  );

  return (
    <nav role="navigation">
      {announce && (
        <span role="log" className="visualyHidden">
          {announce == "opened" ? "развернуто" : "свернуто"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
