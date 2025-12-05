import { API } from "@/app/api";
import { PostItem } from "@/interfaces/post.interface";

export const getPosts = async ({
  limit,
}: {
  limit: number;
}): Promise<PostItem[]> => {
  const res = await fetch(API.posts + `?_limit=${limit}`, {
    next: { revalidate: 10 },
  });

  return res.json();
};
