import type { Metadata } from "next";
import type { Viewport } from "next";
import localFont from "next/font/local";

import "../styles/globals.css";
import "../styles/typography.css";

const suiteSans = localFont({
  src: "../../public/fonts/SUITE-Variable.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "강희&다솜 청첩장",
  description: "강희와 다솜이의 결혼식에 초대합니다.",
  openGraph: {
    title: "강희&다솜 결혼식 초대장",
    description: "강희와 다솜이의 결혼식에 초대합니다.",
    locale: "ko_KR",
    images: [
      {
        url: "/images/ogimage.png",
        width: 1200,
        height: 630,
        alt: "강희&다솜 청첩장",
      },
    ],
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
