import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";

import "../styles/globals.css";
import "../styles/typography.css";
import "../styles/layout.css";
import Nav from "../components/nav";
import background from "@/images/blackwave.jpg";

const suiteSans = localFont({
  src: "../fonts/SUITE-Variable.woff2",
  // variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "웹 프론트 개발자 이강희 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suiteSans} antialiased`}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={background}
            alt="background"
          />
          <main
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          >
            {children}
          </main>
          <Nav />
        </div>
      </body>
    </html>
  );
}
