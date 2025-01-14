"use client";

import styles from "@/styles/frame.module.css";
import Image from "next/image";
import kanghee from "@/images/profile/kanghee.png";
import { useEffect, useRef, useState } from "react";

export default function Chat({
  direction,
  children,
  profile,
  image,
}: {
  direction: string;
  children: React.ReactNode;
  profile?: boolean;
  image?: boolean;
}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 뷰포트에 나타났을 경우
          setIsInViewport(true);
        } else {
          // 요소가 뷰포트를 벗어난 경우
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  return (
    <div
      className={`${styles.chat} ${
        direction === "left" ? styles.left : styles.right
      } ${image ? styles.img : ""} ${isInViewport ? styles.view : "aa"} body1`}
      ref={ref}
    >
      {profile && (
        <div className={styles.profile}>
          <Image src={kanghee} alt="kanghee" />
        </div>
      )}
      {direction === "left" && !profile && <div className={styles.profile} />}
      <div className={styles.balloon}>{children}</div>
    </div>
  );
}
