import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { routeToCategoryMap } from "@/helpers";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { notFound } from "next/navigation";
import { TypePage } from "../../components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const page = await getPage(alias);

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
    openGraph: {
      title: page?.metaTitle,
      description: page?.metaDescription,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function Type({
  params,
}: {
  params: Promise<{ type: string; alias: string }>;
}) {
  const { type, alias } = await params;
  const firstCategory = routeToCategoryMap[type] ?? TopLevelCategory.Courses;

  const page = await getPage(alias);
  if (!page) notFound();

  const products = await getProducts(page?.category, 10);
  if (!products) notFound();

  return (
    <TypePage page={page} products={products} firstCategory={firstCategory} />
  );
}
