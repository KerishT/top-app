import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { MenuClient } from "./MenuClient";

export const Menu = async () => {
  const menus = {
    [TopLevelCategory.Courses]: await getMenu(TopLevelCategory.Courses),
    [TopLevelCategory.Services]: await getMenu(TopLevelCategory.Services),
    [TopLevelCategory.Books]: await getMenu(TopLevelCategory.Books),
    [TopLevelCategory.Products]: await getMenu(TopLevelCategory.Products),
  };

  return <MenuClient menus={menus} />;
};
