import styles from "@/styles/section.module.css";
import Image from "next/image";
import calendar from "/public/images/section06/calendar.svg";

export default function Section06() {
  return (
    <div className="pb-[20vw] bg-[var(--basic-900)]">
      <Image src={calendar} alt="calendar" />
    </div>
  );
}
