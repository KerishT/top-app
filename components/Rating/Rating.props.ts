import { ComponentProps } from "react";
import { FieldError } from "react-hook-form";

export interface RatingProps extends ComponentProps<"div"> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  error?: FieldError;
}
