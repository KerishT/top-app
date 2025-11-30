import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export interface MenuClientProps {
  menus: Record<TopLevelCategory, MenuItem[]>;
}
