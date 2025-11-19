import { getMenu } from "@/api/menu";

export const Menu = async () => {
  const menu = await getMenu(0);

  return (
    <main>
      <div>{menu.length}</div>
    </main>
  );
};
