import styles from "@/styles/section.module.css";
import ourwedding from "/public/images/section03/our_wedding.png";
import Image from "next/image";

export default function Section03() {
  return (
    <div
      style={{
        padding: "24vw 0",
        background: "var(--basic-900)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "var(--background)",
          position: "absolute",
          top: "-1vw",
          transform: "skewY(-12deg)",
        }}
      >
        <p style={{ position: "absolute", bottom: 0 }}>aa</p>
        <p style={{ position: "absolute", bottom: 0 }}>aa</p>
      </div>
      <div style={{ position: "relative" }}>
        <Image src={ourwedding} alt="ourwedding" />
      </div>
    </div>
  );
}
