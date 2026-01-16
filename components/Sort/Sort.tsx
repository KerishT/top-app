import clsx from "clsx";
import styles from "./Sort.module.css";
import { SortProps, SortEnum } from "./Sort.props";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={clsx(styles.sort, className)} {...props}>
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={clsx({
          [styles.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={clsx({
          [styles.active]: sort == SortEnum.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};
