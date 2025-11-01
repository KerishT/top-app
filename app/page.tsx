import { Htag } from "@/components";
import { Button } from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <Htag tag="h1">123</Htag>
      <Button arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
    </>
  );
}
