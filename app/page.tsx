import { ArticleList } from "@/components";

const articles = [
  {
    image: "/next.svg",
    tag: "Front-end",
    date: "1 месяц назад",
    title: "Как работать с CSS Grid",
    likes: 4,
    description:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    timeToRead: "3 минуты",
    href: "/",
  },
  {
    image: "/next.svg",
    tag: "Front-end",
    date: "1 месяц назад",
    title: "Как работать с CSS Grid",
    likes: 4,
    description:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    timeToRead: "3 минуты",
    href: "/",
  },
  {
    image: "/next.svg",
    tag: "Front-end",
    date: "1 месяц назад",
    title: "Как работать с CSS Grid",
    likes: 4,
    description:
      "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы...",
    timeToRead: "3 минуты",
    href: "/",
  },
];

export default function Home() {
  return <ArticleList articles={articles} />;
}
