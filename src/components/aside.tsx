import Image from "next/image";

import styles from "@/styles/nav.module.css";
import mugcup from "/public/images/mugcup.png";
import notion from "/public/images/icons/notion.svg";

export default function Aside({ type }: { type: string }) {
  return (
    <>
      {type === "pc" ? (
        <a
          href="https://pattern-acoustic-8e2.notion.site/R-sum-920dd947430d45e6862f1fdd46a1eb6f"
          target="_blank"
          className={styles.aside}
        >
          <Image className={styles.mugcup} src={mugcup} alt="mugcup" />
          <Image className={styles.notion} src={notion} alt="notion" />
          <div className={styles.comment}>
            <p className="body3">자세한 얘기도 들어보실래요?</p>
          </div>
        </a>
      ) : (
        <a
          href="https://pattern-acoustic-8e2.notion.site/R-sum-920dd947430d45e6862f1fdd46a1eb6f"
          target="_blank"
          className={styles["aside-mo"]}
        >
          <Image className={styles.notion} src={notion} alt="notion" />
          <p className={styles["button-text"]}>노션 바로가기</p>
        </a>
      )}
    </>
  );
}
