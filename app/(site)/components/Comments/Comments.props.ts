import { CommentItem } from "@/interfaces/comments.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CommentsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comments?: CommentItem[];
}
