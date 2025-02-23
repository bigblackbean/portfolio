"use client";

import styles from "@/styles/main.module.css";
import { useEffect, useState } from "react";

const text = ["UIUX DESIGNER", "WEB PUBLISHER", "FE DEVELOPER"];

export default function MainText({ clicked }: { clicked: boolean }) {
  const [order, setOrder] = useState<number>(2);

  useEffect(() => {
    const flicker = setInterval(() => {
      setOrder((prev) => (prev < 3 ? prev + 1 : 0));
    }, 800);

    return () => {
      clearInterval(flicker);
    };
  }, []);

  return (
    <div className={styles["main-text"]}>
      {clicked ? (
        <div>
          {text.map((item, index) => (
            <p
              key={index}
              className={`${index === order ? styles.point : ""} ${styles.job}`}
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p>
          <b className={styles.point}></b>협업을 디자인하는,
          <br />
          프론트엔드 개발자
          <br />
          <b className={styles.point}>이강희</b>입니다.
          <br />
        </p>
      )}
    </div>
  );
}
