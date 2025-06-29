"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ModalProvider } from "@/context/ModalContext";
import Main from "@/app/section/main";
import Section01 from "./section/section01";
import Section02 from "./section/section02";
import Section03 from "./section/section03";
import Section04 from "./section/section04";
import Section05 from "./section/section05";
import Section06 from "./section/section06";
import Section07 from "./section/section07";
import Section08 from "./section/section08";
import Footer from "./section/footer";

function Wrap() {
  return (
    <div>
      <Main />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ModalProvider>
      <Wrap />
    </ModalProvider>
  );
}
