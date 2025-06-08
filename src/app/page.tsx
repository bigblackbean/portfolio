"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Main from "@/components/main";

export default function Home() {
  const [clicked, setClicked] = useState<boolean>(false);

  const next = () => {
    setClicked(true);
    sessionStorage.setItem("visited", "true");
  };

  const back = () => {
    setClicked(false);
    sessionStorage.setItem("visited", "false");
  };

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited === "true") {
      setClicked(true);
    }
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}
