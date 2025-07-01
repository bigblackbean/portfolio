import styles from "@/styles/main.module.css";
import Image from "next/image";
import couple from "/public/images/main/Main-01.png";
import heart from "/public/images/main/white_heart.svg";
import arrow_left from "/public/images/main/left_arrow.svg";
import arrow_right from "/public/images/main/right_arrow.svg";

export default function Main() {
  return (
    <div
      className="w-full bg-[var(--basic-900)]"
      style={{ padding: "0 0 14vw" }}
    >
      <div className="font-[var(--basic-0)] overflow-hidden">
        <h2 className={`${styles.title} walter-turncoat-regular`}>
          <span className={styles.line1}>YOU ARE INVITED TO</span>
          <span className={styles.line2}>OUR WEDDING</span>
        </h2>
        <div className={styles.couple} style={{ position: "relative" }}>
          <Image src={couple} alt="couple" />
          <div
            style={{
              width: "14vw",
              position: "absolute",
              top: "2vw",
              left: "29vw",
            }}
          >
            <Image src={heart} alt="heart" />
          </div>
          <div
            style={{
              width: "12vw",
              position: "absolute",
              top: "2vw",
              left: "58vw",
            }}
          >
            <Image src={arrow_left} alt="arrow-left" />
            <span
              style={{
                fontSize: "var(--fz-14)",
                color: "var(--basic-0)",
                position: "relative",
                left: "14vw",
                top: "-6vw",
              }}
            >
              이강희
            </span>
          </div>
          <div
            style={{
              width: "12vw",
              position: "absolute",
              top: "112vw",
              left: "24vw",
            }}
          >
            <Image src={arrow_right} alt="arrow-right" />
            <span
              style={{
                fontSize: "var(--fz-14)",
                color: "var(--basic-0)",
                position: "relative",
                left: "-10vw",
                top: "-8vw",
              }}
            >
              소다솜
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.line1}>2025.09.13 SAT 02:00PM</p>
          <p className={styles.line2}>at. VENUEVIAN 2층 에메랄드홀</p>
        </div>
      </div>
    </div>
  );
}
