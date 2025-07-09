"use client";

import Image from "next/image";
import { ModalProvider } from "@/context/ModalContext";
import { ToastProvider } from "@/context/ToastContext";
import Main from "@/app/section/main";
import Section01 from "./section/section01";
import Section03 from "./section/section03";
import Section04 from "./section/section04";
import Section06 from "./section/section06";
import Section07 from "./section/section07";
import Section08 from "./section/section08";
import Footer from "./section/footer";
import maptitle from "/public/images/section07/map_title.svg";
import Appbar from "@/components/appbar";
import { useEffect, useRef, useState } from "react";

function Wrap() {
  const mainRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop.current) {
        // 아래로 스크롤
        setIsScrollingDown(true);
      } else {
        // 위로 스크롤
        setIsScrollingDown(false);
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div ref={mainRef}>
        <Main />
      </div>
      <Section01 />
      <Section03 />
      <div ref={galleryRef} className="scroll-mt-[-240vw]">
        <Section04 />
      </div>
      <div ref={calendarRef} className="scroll-mt-[10vw]">
        <Section06 />
      </div>
      <div className="relative z-10">
        <div className="w-[68vw] absolute top-[-32vw] left-[26vw]">
          <Image src={maptitle} alt="map-title" />
        </div>
      </div>
      <div ref={mapRef}>
        <Section07 />
      </div>
      <div ref={messageRef}>
        <Section08 />
      </div>
      <Footer />
      <Appbar
        onNavigate={{
          main: () => scrollTo(mainRef),
          gallery: () => scrollTo(galleryRef),
          calendar: () => scrollTo(calendarRef),
          map: () => scrollTo(mapRef),
          message: () => scrollTo(messageRef),
        }}
        isScrollingDown={isScrollingDown}
      />
    </div>
  );
}

export default function Home() {
  return (
    <ModalProvider>
      <ToastProvider>
        <Wrap />
      </ToastProvider>
    </ModalProvider>
  );
}
