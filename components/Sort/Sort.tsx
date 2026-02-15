import clsx from "clsx";
import styles from "./Sort.module.css";
import { SortProps, SortEnum } from "./Sort.props";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  const isRatingSort = sort == SortEnum.Rating;
  const isPriceSort = sort == SortEnum.Price;

  return (
    <div className={clsx(styles.sort, className)} {...props}>
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>

      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={clsx({
          [styles.active]: isRatingSort,
        })}
        aria-pressed={isRatingSort}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </button>

      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={clsx({
          [styles.active]: isPriceSort,
        })}
        aria-pressed={isPriceSort}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};
