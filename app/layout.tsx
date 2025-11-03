import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My blog",
  description: "Сайт посвящен моему блогу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
