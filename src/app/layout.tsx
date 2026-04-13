import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WithBand | バンド活動のためのソーシャル掲示板",
  description: "メンバー募集、ライブ告知、セッション募集、機材売買を横断できるバンド活動向けソーシャル掲示板。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}