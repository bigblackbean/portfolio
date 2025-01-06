"use client";

import { useEffect, useState } from "react";
import Container from "@/components/container";
import MainText from "@/components/main-text";
import MainContents from "@/components/main-contents";
import styles from "@/styles/main.module.css";
import back from "@/images/icons/back.svg";
import Image from "next/image";

export default function Home() {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickCup = () => {
    setClicked(true);
    sessionStorage.setItem("visited", "true");
  };

  const mainBack = () => {
    setClicked(false);
    sessionStorage.removeItem("visited");
  };

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");
    if (visited === "true") {
      setClicked(true);
    }
  }, []);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <MainText clicked={clicked} />
        <MainContents clicked={clicked} clickCup={clickCup} />
      </div>
      {clicked && (
        <button onClick={mainBack} type="button">
          <div className={styles.back}>
            <div style={{ width: "60%", height: "60%" }}>
              <Image style={{ width: "100%" }} src={back} alt="back" />
            </div>
          </div>
        </button>
      )}
    </Container>
  );
}
