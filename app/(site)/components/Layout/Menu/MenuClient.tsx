"use client";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import styles from "./Menu.module.css";
import { MenuClientProps } from "./Menu.props";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    id: TopLevelCategory.Courses,
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
  },
  {
    id: TopLevelCategory.Services,
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
  },
  {
    id: TopLevelCategory.Books,
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
  },
  {
    id: TopLevelCategory.Products,
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
  },
];

const buildFirstLevel = (
  menu: MenuItem[],
  firstCategory: TopLevelCategory,
  pathname: string,
  openSecondLevel: (secondCategory: string) => void
) => {
  return (
    <>
      {firstLevelMenu.map(m => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={clsx(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>
          {m.id == firstCategory &&
            buildSecondLevel(menu, m, pathname, openSecondLevel)}
        </div>
      ))}
    </>
  );
};

const buildSecondLevel = (
  menu: MenuItem[],
  menuItem: FirstLevelMenuItem,
  pathname: string,
  openSecondLevel: (secondCategory: string) => void
) => {
  return (
    <div className={styles.secondBlock}>
      {menu.map(m => {
        if (m.pages.map(p => p.alias).includes(pathname.split("/")[2])) {
          m.isOpened = true;
        }

        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={clsx(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route, pathname)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const buildThirdLevel = (
  pages: PageItem[],
  route: string,
  pathname: string
) => {
  return pages.map(p => (
    <Link
      key={p._id}
      href={`/${route}/${p.alias}`}
      className={clsx(styles.thirdLevel, {
        [styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
      })}
    >
      {p.category}
    </Link>
  ));
};

export const MenuClient = ({
  menu: serverMenu,
  firstCategory,
}: MenuClientProps) => {
  const [menu, setMenu] = useState<MenuItem[]>(serverMenu);
  const pathname = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    setMenu(prevMenu =>
      prevMenu.map(m =>
        m._id.secondCategory === secondCategory
          ? { ...m, isOpened: !m.isOpened }
          : m
      )
    );
  };

  return (
    <nav>{buildFirstLevel(menu, firstCategory, pathname, openSecondLevel)}</nav>
  );
};
