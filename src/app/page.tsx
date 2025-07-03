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

function Wrap() {
  return (
    <div>
      <Main />
      <Section01 />
      <Section03 />
      <Section04 />
      <Section06 />
      <div className="relative z-10">
        <div className="w-[68vw] absolute top-[-32vw] left-[26vw]">
          <Image src={maptitle} alt="map-title" />
        </div>
      </div>
      <Section07 />
      <Section08 />
      <Footer />
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
