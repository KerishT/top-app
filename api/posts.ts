import { API } from "@/app/api";
import { PostItem } from "@/interfaces/post.interface";

export const getPosts = async (): Promise<PostItem[]> => {
  const res = await fetch(API.posts, {
    next: { revalidate: 10 },
  });

  return res.json();
};
