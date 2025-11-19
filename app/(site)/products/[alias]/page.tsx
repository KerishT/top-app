import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продукты",
};

export default async function PageProducts({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  return `Продукты: ${alias}`;
}
