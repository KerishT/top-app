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
