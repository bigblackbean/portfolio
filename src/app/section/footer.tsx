import styles from "@/styles/section.module.css";
import Image from "next/image";
import bg from "/public/images/footer/footer_bg.svg";
import kakao from "/public/images/footer/kakaotalk.svg";
import share from "/public/images/footer/share.svg";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "3vw",
          padding: "0 4vw",
        }}
      >
        <div style={{ width: "10vw", height: "10vw" }}>
          <Image src={kakao} alt="kakao" />
        </div>
        <div style={{ width: "10vw", height: "10vw" }}>
          <Image src={share} alt="share" />
        </div>
      </div>
      <p>THANK U</p>
      <Image src={bg} alt="background" />
    </div>
  );
}
