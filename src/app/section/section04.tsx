import styles from "@/styles/section.module.css";
import dasom from "/public/images/section04/dasom.png";
import kanghee from "/public/images/section04/kanghee.png";
import bridebg from "/public/images/section04/bride_bg.svg";
import groombg from "/public/images/section04/groom_bg.svg";
import Image from "next/image";

export default function Section04() {
  return (
    <div style={{ background: "var(--basic-900)" }}>
      <p>
        세상 단 하나뿐인 진실, 고백해
        <br />
        내 맘의 공백엔 노래와 그대만 존재해
        <br />
        내가 한 방울의 물을 원할 땐 바다를,
        <br />
        또 내가 한알의 모래를 원한 땐 사막을 주는 너
        <br />
        <span>에픽하이 {`<HEAVEN>`} 중에서</span>
      </p>

      <Image src={groombg} alt="groom bg" />
      <Image src={kanghee} alt="kanghee" />
      <Image src={bridebg} alt="bride bg" />
      <Image src={dasom} alt="dasom" />
    </div>
  );
}
