import { getPost } from "@/api/getPost";
import { getPosts } from "@/api/posts";
import { ArticleDetails } from "@/components/Article/ArticleDetails/ArticleDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Пост",
};

export async function generateStaticParams() {
  const posts = await getPosts({ limit: 6 });

  return posts.map(post => ({
    id: String(post.id),
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(+id);

  if (!post) {
    notFound();
  }

  return <ArticleDetails {...post} />;
}
