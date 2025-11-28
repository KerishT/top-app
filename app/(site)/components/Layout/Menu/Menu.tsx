import { getMenu } from "@/api/menu";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import clsx from "clsx";
import Link from "next/link";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import styles from "./Menu.module.css";

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

const buildFirstLevel = (menu: MenuItem[], firstCategory: number) => {
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
          {m.id == firstCategory && buildSecondLevel(menu, m)}
        </div>
      ))}
    </>
  );
};

const buildSecondLevel = (menu: MenuItem[], menuItem: FirstLevelMenuItem) => {
  return (
    <div className={styles.secondBlock}>
      {menu.map(m => (
        <div key={m._id.secondCategory}>
          <div className={styles.secondLevel}>{m._id.secondCategory}</div>
          <div
            className={clsx(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened,
            })}
          >
            {buildThirdLevel(m.pages, menuItem.route)}
          </div>
        </div>
      ))}
    </div>
  );
};

const buildThirdLevel = (pages: PageItem[], route: string) => {
  return pages.map(p => (
    <Link
      key={p._id}
      href={`/${route}/${p.alias}`}
      className={clsx(styles.thirdLevel, {
        [styles.thirdLevelActive]: false,
      })}
    >
      {p.category}
    </Link>
  ));
};

export const Menu = async () => {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await getMenu(firstCategory);

  return <nav>{buildFirstLevel(menu, firstCategory)}</nav>;
};
