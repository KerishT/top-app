import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";

export const Product = ({ product, className, ...props }: ProductProps) => {
  return <div>{product.title}</div>;
};
