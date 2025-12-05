import { getPosts } from "@/api/posts";
import { ArticleList } from "@/components";
import { notFound } from "next/navigation";

export default async function Posts() {
  const posts = (await getPosts({ limit: 6 })).map(post => ({
    ...post,
    id: String(post.id),
  }));

  if (!posts) {
    notFound();
  }

  return <ArticleList articles={posts} />;
}
