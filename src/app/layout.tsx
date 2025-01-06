import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/globals.css";
import "../styles/typography.css";

const suiteSans = localFont({
  src: "../fonts/SUITE-Variable.woff2",
  // variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "이강희의 포트폴리오",
  description: "프론트엔드 웹 개발자 이강희 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${suiteSans} antialiased`}>
        <main style={{ width: "100%", height: "100%" }}>{children}</main>
      </body>
    </html>
  );
}
