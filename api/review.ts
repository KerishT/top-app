import {
  IReviewForm,
  IReviewSentResponse,
} from "@/app/(site)/components/ReviewForm/ReviewForm.interface";
import { API } from "@/app/api";

export async function sentReview(
  formData: IReviewForm,
  productId: string
): Promise<IReviewSentResponse | null> {
  const res = await fetch(API.review.createDemo, {
    method: "POST",
    body: JSON.stringify({ ...formData, productId }),
    headers: new Headers({ "content-type": "application/json" }),
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
