import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { MenuClient } from "./MenuClient";

export const Menu = async () => {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await getMenu(firstCategory);

  return <MenuClient menu={menu} firstCategory={firstCategory} />;
};
