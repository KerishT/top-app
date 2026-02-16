"use client";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import GlassIcon from "./glass.svg";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${search}`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <form className={clsx(className, styles.search)} {...props} role="form">
      <Input
        name="search"
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Поиск по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
