export interface ArticleDetailsProps {
  id: number;
  userId: number;
  image?: string;
  tag?: string;
  date?: string;
  title: string;
  likes?: number;
  body: string;
  timeToRead?: string;
  className?: string;
}
