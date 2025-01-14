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
  accordian,
}: {
  direction: string;
  children: React.ReactNode;
  profile?: boolean;
  image?: boolean;
  accordian?: boolean;
}) {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${styles.chat} ${
        direction === "left" ? styles.left : styles.right
      } ${image ? styles.img : ""} ${isInViewport ? styles.view : ""} body1`}
      ref={ref}
    >
      {profile && (
        <div className={styles.profile}>
          <Image src={kanghee} alt="kanghee" />
        </div>
      )}
      {direction === "left" && !profile && <div className={styles.profile} />}
      {accordian ? (
        <div style={{ width: "100%" }}>{children}</div>
      ) : (
        <div className={styles.balloon}>{children}</div>
      )}
    </div>
  );
}
