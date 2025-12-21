import { API } from "@/app/api";
import { CommentItem } from "@/interfaces/comments.interface";

export const getComments = async (postId: number): Promise<CommentItem[]> => {
  const res = await fetch(`${API.comments}/?postId=${postId}`, {
    next: { revalidate: 10 },
  });

  return res.json();
};
