"use client";
import { Advantages, HhData, Htag, Sort, Tag } from "@/components";
import { SortEnum } from "@/components/Sort/Sort.props";
import { TopLevelCategory } from "@/interfaces/page.interface";
import parse from "html-react-parser";
import styles from "./TypePage.module.css";
import { TypePageProps } from "./TypePage.props";
import { sortReducer } from "@/components/Sort/sort.reducer";
import { useReducer } from "react";
import { Product } from "../Product/Product";

export const TypePage = ({ page, products, firstCategory }: TypePageProps) => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>

        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map(p => <Product layout key={p._id} product={p} />)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>

        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Преимущства</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}

      <Htag tag="h2">Получаемые навыки</Htag>

      <div className={styles.tags}>
        {page.tags.map(t => (
          <Tag key={t} color="primary">
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};
