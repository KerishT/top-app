"use client";
import { Rating } from "@/components";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(4);

  return <Rating rating={rating} setRating={setRating} isEditable />;
}
