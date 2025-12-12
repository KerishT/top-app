import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import CloseIcon from "./close.svg";
import clsx from "clsx";
import { Input, Rating, Textarea, Button } from "@/components";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps) => {
  return (
    <>
      <div className={clsx(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя" />

        <Input placeholder="Заголовок отзыва" className={styles.title} />

        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>

        <Textarea placeholder="Текст отзыва" className={styles.description} />

        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>

          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>

      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>

        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
