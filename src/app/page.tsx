"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "@/styles/main.module.css";
import MainText from "@/components/main-text";
import MainContents from "@/components/main-contents";
import arrow from "/public/images/icons/back.svg";

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
    <div className={styles.main}>
      <div className={styles["main-container"]}>
        <div className={styles["main-block"]}>
          <MainText clicked={clicked} />
          <MainContents clicked={clicked} next={next} />
        </div>
      </div>
      {clicked && (
        <button onClick={back} type="button">
          <div className={styles.back}>
            <div style={{ width: "60%", height: "60%" }}>
              <Image style={{ width: "100%" }} src={arrow} alt="back arrow" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
