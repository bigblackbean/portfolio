import styles from "@/styles/section.module.css";
import bg from "/public/images/section01/background.svg";
import Image from "next/image";

export default function Section01() {
  return (
    <div style={{ background: "var(--basic-900)" }}>
      <Image src={bg} alt="background" />
      <div style={{ color: "var(--background)" }}>
        <p>2025.09.13 SAT 02:00PM</p>
        <p>VENUEVIAN WEDDING</p>
        <p>서울 영등포구 신길로 89 베뉴비안 웨딩</p>
      </div>
    </div>
  );
}
