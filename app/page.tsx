"use client";
import { Likes } from "@/components";

const postId = 1;

export default function Home() {
  const fetchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PATCH",
    });
  };

  return <Likes onClick={fetchPost} />;
}
