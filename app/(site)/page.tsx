import { getPosts } from "@/api/posts";

export default async function Home() {
  const posts = await getPosts();

  return `Главная ${posts.length}`;
}
