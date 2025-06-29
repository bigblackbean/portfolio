import styles from "@/styles/section.module.css";
import Image from "next/image";
import maptitle from "/public/images/section07/map_title.svg";
import KakaoMap from "@/components/kakaomap";

export default function Section07() {
  return (
    <div>
      <Image src={maptitle} alt="map-title" />
      <KakaoMap />
    </div>
  );
}
