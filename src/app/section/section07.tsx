import Image from "next/image";
import maptitle from "/public/images/section07/map_title.svg";
import KakaoMap from "@/components/kakaomap";
import { copyToClipboard } from "@/constant/copy";

export default function Section07() {
  const address = "서울 영등포구 신길로 89 베뉴비안 웨딩";

  return (
    <div className="bg-[var(--bg-pink)] relative py-[19vw]">
      <div className="w-[70vw] absolute top-[-32vw] left-[28vw]">
        <Image src={maptitle} alt="map-title" />
      </div>
      <div className="h-[68vw]">
        <KakaoMap />
      </div>
      <div className="px-[4vw]">
        <div className="flex justify-between items-center py-[4vw]">
          <div style={{ fontSize: "var(--fz-16)" }}>
            <p style={{ fontWeight: 600 }}>VENUEVIAN WEDDING</p>
            <p>{address}</p>
          </div>
          <div>
            <button
              onClick={() => copyToClipboard(address)}
              className="py-[2vw] px-[4vw] bg-[var(--basic-800)] text-[var(--basic-0)] rounded-[4vw]"
              style={{ fontSize: "var(--fz-16)", fontWeight: 700 }}
              type="button"
            >
              주소복사
            </button>
          </div>
        </div>
        <p
          style={{
            fontSize: "var(--fz-11)",
            fontWeight: 400,
            color: "var(--basic-600)",
          }}
        >
          ※ 자차를 이용할 경우 지상, 지하 주차 가능하지만 다소 공간이 협소할 수
          있습니다.
        </p>
      </div>
    </div>
  );
}
