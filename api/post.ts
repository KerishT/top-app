import { API } from "@/app/api";
import { PostItem } from "@/interfaces/post.interface";

export const getPost = async (id: number): Promise<PostItem> => {
  const res = await fetch(`${API.posts}/${id}`, {
    next: { revalidate: 10 },
  });

  return res.json();
};
