import clsx from "clsx";
import Logo from "../icons/logo.svg";
import { Menu } from "../Menu/Menu";
import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";
import { Search } from "@/components";

export const Sidebar = ({
  className,
  showMenu = true,
  ...props
}: SidebarProps) => {
  return (
    <aside className={clsx(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />

      <Search />

      {showMenu && <Menu />}
    </aside>
  );
};
