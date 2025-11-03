import { Button, Htag, P, Tag } from "@/components";

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
    </>
  );
}
