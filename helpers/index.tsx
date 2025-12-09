import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const routeToCategoryMap: Record<string, TopLevelCategory> = {
  courses: TopLevelCategory.Courses,
  services: TopLevelCategory.Services,
  books: TopLevelCategory.Books,
  products: TopLevelCategory.Products,
};

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

const declOfNumMask = [2, 0, 1, 1, 1, 2];
export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : declOfNumMask[number % 10 < 5 ? number % 10 : 5]
  ];
};
