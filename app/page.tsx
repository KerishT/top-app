import {
  ArticleListItem,
  Button,
  Card,
  Htag,
  Likes,
  P,
  Tag,
} from "@/components";

export default function Home() {
  return (
    <>
      <Htag>123</Htag>
      <Button arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P>Test</P>
      <Tag size="s" color="red" href="/">
        Test
      </Tag>

      <Card>
        <ArticleListItem
          image="/next.svg"
          tag="Front-end"
          date="1 месяц назад"
          title="Как работать с CSS Grid"
          likes={4}
          description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..."
          timeToRead="3 минуты"
          href="/"
        />
      </Card>
    </>
  );
}
