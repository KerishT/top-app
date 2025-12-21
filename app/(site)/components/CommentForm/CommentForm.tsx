"use client";
import styles from "./CommentForm.module.css";
import CloseIcon from "./close.svg";
import clsx from "clsx";
import { Input, Textarea, Button } from "@/components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CommentFormProps } from "./CommentForm.props";
import { ICommentForm } from "./CommentForm.interface";
import { sendComment } from "@/api/comment";

export const CommentForm = ({
  postId,
  className,
  ...props
}: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICommentForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: ICommentForm) => {
    try {
      const data = await sendComment(formData, postId);

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
      <div className={clsx(styles.commentForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
        />

        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />

        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
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
