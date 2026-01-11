import { getComments } from "@/api/comments";
import { getPost } from "@/api/post";
import { getPosts } from "@/api/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommentForm, Comments } from "../../components";
import { ArticleDetails } from "@/components";
import styles from "./page.module.css";

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
  const comments = await getComments(+id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleDetails {...post} />

      <Comments comments={comments} />

      <CommentForm postId={id} className={styles.commentForm} />
    </>
  );
}
