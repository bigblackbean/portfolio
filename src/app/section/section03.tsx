import styles from "@/styles/section.module.css";
import ourwedding from "/public/images/section03/our_wedding.png";
import heart from "/public/images/section03/heart.svg";
import Image from "next/image";

export default function Section03() {
  return (
    <div className="py-[20vw] bg-[var(--basic-900)]">
      <div className="relative rotate-[-7deg] z-10 top-[-2vw]">
        <div className="w-[12vw] absolute left-[12vw] top-[-9vw]">
          <Image src={heart} alt="heart" />
        </div>
        <p
          className="w-full text-center text-[#CD6485] walter-turncoat-regular"
          style={{ fontSize: "var(--fz-24)" }}
        >
          YOU'RE INVITED TO
        </p>
      </div>
      <div
        style={{
          padding: "16vw 0 32vw",
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
            transform: "skewY(-7deg)",
          }}
        >
          <div className="w-full flex justify-between">
            <p
              className="absolute left-[4vw] bottom-[2vw]"
              style={{ fontSize: "var(--fz-16)", fontWeight: 600 }}
            >
              2025.09.13
              <br />
              SATURDAY
            </p>
            <p
              className="absolute right-[4vw] bottom-[2vw]"
              style={{ fontSize: "var(--fz-16)", fontWeight: 600 }}
            >
              VENUEVIAN
              <br />
              2층 에메랄드홀
            </p>
          </div>
        </div>
        <div className="relative w-[92%] m-auto">
          <Image src={ourwedding} alt="ourwedding" />
        </div>
      </div>
    </div>
  );
}
