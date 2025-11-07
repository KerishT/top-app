import { ComponentProps } from "react";

export interface RatingProps extends ComponentProps<"div"> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
