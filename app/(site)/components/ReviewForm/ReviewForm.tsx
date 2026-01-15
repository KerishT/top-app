"use client";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import CloseIcon from "./close.svg";
import clsx from "clsx";
import { Input, Rating, Textarea, Button } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import { useState } from "react";
import { sentReview } from "@/api/review";

export const ReviewForm = ({
  productId,
  className,
  isOpened,
  ...props
}: ReviewFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const data = await sentReview(formData, productId);

      if (data?.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
        />

        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
        />

        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                isEditable
                ref={field.ref}
                rating={field.value}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>

        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />

        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1}>
            Отправить
          </Button>

          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>

      {isSuccess && (
        <div className={clsx(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}

      {error && (
        <div className={clsx(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
};
