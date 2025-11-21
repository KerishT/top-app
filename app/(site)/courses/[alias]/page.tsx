import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Курс",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);

  return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function Course({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }

  const products = await getProducts(page?.category, 10);

  return `${page.title} - ${products?.length}`;
}
