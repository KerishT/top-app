"use client";
import clsx from "clsx";
import { Fragment, JSX, KeyboardEvent, useEffect, useState } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg";

export const Rating = ({
  rating,
  setRating,
  ref,
  error,
  isEditable = false,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    Array.from({ length: 5 }, (_, i) => <Fragment key={i}></Fragment>)
  );

  const changeDisplay = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if ((!isEditable && e.code !== "Space") || !setRating) return;

    setRating(i);
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
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            handleSpace(starNumber, e)
          }
        />
      );
    });

    setRatingArray(updatedRating);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <div
      {...props}
      ref={ref}
      className={clsx(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {ratingArray}

      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
