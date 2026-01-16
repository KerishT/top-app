"use client";
import clsx from "clsx";
import {
  Fragment,
  JSX,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating = ({
  rating,
  setRating,
  ref,
  error,
  isEditable = false,
  tabIndex,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array.from({ length: 5 }, (_, i) => <Fragment key={i}></Fragment>)
  );
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  const changeDisplay = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArray.map((r, i) => {
      const starNumber = i + 1;
      const mods = {
        [styles.filled]: i < currentRating,
        [styles.editable]: isEditable,
      };

      return (
        <StarIcon
          key={i}
          className={clsx(styles.star, mods)}
          onMouseEnter={() => changeDisplay(starNumber)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(starNumber)}
        />
      );
    });

    setRatingArray(updatedRating);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, tabIndex]);

  return (
    <div
      {...props}
      ref={ref}
      className={clsx(styles.ratingWrapper, {
        [styles.error]: error,
      })}
      onKeyDown={handleKey}
      tabIndex={tabIndex}
    >
      {ratingArray}

      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
