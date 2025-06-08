import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/globals.css";
import "../styles/typography.css";

const suiteSans = localFont({
  src: "../../public/fonts/SUITE-Variable.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "모바일 청첩장",
  description: "강희와 다솜이의 결혼식에 초대합니다.",
  openGraph: {
    title: "이강희의 포트폴리오",
    description: "강희와 다솜이의 결혼식에 초대합니다.",
    locale: "ko_KR",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
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
