import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Card, Tag, Rating, Button, Divider } from "@/components";
import { priceRu } from "@/helpers";
import clsx from "clsx";

export const Product = ({ product, className, ...props }: ProductProps) => {
  return (
    <Card className={clsx(styles.product, className)}>
      <div className={styles.logo}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.title}>{product.title}</div>

      <div className={styles.price}>
        {priceRu(product.price)}

        {product.oldPrice && (
          <Tag className={styles.oldPrice} color="green">
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>

      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>

      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>

      <div className={styles.tags}>
        {product.categories.map(c => (
          <Tag key={c} className={styles.category} color="ghost">
            {c}
          </Tag>
        ))}
      </div>

      <div className={styles.priceTitle}>цена</div>

      <div className={styles.creditTitle}>кредит</div>

      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>

      <Divider className={styles.hr} />

      <div className={styles.description}>{product.description}</div>

      <div className={styles.feature}>Фичи</div>

      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>

            <div>{product.advantages}</div>
          </div>
        )}

        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>

            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>

      <Divider className={styles.hr} />

      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>

        <Button
          appearance="ghost"
          arrow={"right"}
          className={styles.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
