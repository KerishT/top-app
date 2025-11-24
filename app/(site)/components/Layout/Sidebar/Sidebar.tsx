import clsx from "clsx";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <aside className={clsx(className)} {...props}>
      <Menu />
    </aside>
  );
};
