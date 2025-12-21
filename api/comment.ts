import {
  ICommentForm,
  ICommentSentResponse,
} from "@/app/(site)/components/CommentForm/CommentForm.interface";
import { API } from "@/app/api";

export async function sendComment(
  formData: ICommentForm,
  postId: string
): Promise<ICommentSentResponse | null> {
  const res = await fetch(API.comments, {
    method: "POST",
    body: JSON.stringify({ ...formData, postId }),
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
