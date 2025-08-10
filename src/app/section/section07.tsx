import NaverMap from "@/components/navermap";
import { copyToClipboard } from "@/constant/copy";
import { useToast } from "@/context/ToastContext";
import train from "/public/images/section07/train.svg";
import bus from "/public/images/section07/bus.svg";
import car from "/public/images/section07/car.svg";
import Image from "next/image";

const transportations = [
  {
    id: 1,
    icon: train,
    title: "지하철",
    methos: [
      "7호선 신풍역 하차 > 4번 출구",
      "4번 출구로 나오신 후 바로 우측에 위치함",
    ],
  },
  {
    id: 2,
    icon: bus,
    title: "버스",
    methos: [
      "파랑 (간선버스) : 654",
      "초록 (지선버스) : 5713, 5616, 6411, 5620, 6512, 5625, 6654",
      "마을버스 : 영등포 01, 영등포 07, 영등포 12",
    ],
  },
  {
    id: 3,
    icon: car,
    title: "자가용",
    methos: [
      "주차장 안내 : 지상 지하 주차장 이용",
      "네비게이션 안내 : 신풍역 또는 베뉴비안 입력",
      "주소 : 서울시 영등포구 신길로 89 (신길동 253-251)",
      "문의전화 : 02-842-7200",
    ],
  },
];

export default function Section07() {
  const { showToast } = useToast();
  const address = "서울 영등포구 신길로 89 베뉴비안 웨딩";

  return (
    <div className="bg-[var(--bg-pink)] relative py-[19vw] overflow-x-hidden">
      <div className="h-[68vw]">
        <NaverMap />
      </div>
      <div className="px-[4vw] mb-[6vw]">
        <div className="flex justify-between items-center py-[4vw]">
          <div style={{ fontSize: "var(--fz-16)" }}>
            <p style={{ fontWeight: 600 }}>VENUEVIAN WEDDING</p>
            <p>{address}</p>
          </div>
          <div>
            <button
              onClick={() =>
                copyToClipboard(address)
                  .then(() => showToast("주소를 복사했어요!"))
                  .catch(() => showToast("어라..? 복사가 안됐어요!"))
              }
              className="py-[2vw] px-[4vw] bg-[var(--basic-800)] text-[var(--basic-0)] rounded-[4vw]"
              style={{ fontSize: "var(--fz-16)", fontWeight: 700 }}
              type="button"
            >
              주소복사
            </button>
          </div>
        </div>
      </div>
      <div className="px-[4vw]">
        <ul>
          {transportations.map((item) => (
            <li key={item.id} className="mb-[4vw]">
              <h4
                className="flex items-center justify-between font-semibold pb-[1vw] mb-[2vw] border-b border-[#00000060]"
                style={{ fontSize: "var(--fz-16)" }}
              >
                <span>{item.title}</span>
                <div className="w-[4.5vw] h-[4.5vw]">
                  <Image
                    className="w-full h-full object-contain"
                    src={item.icon}
                    alt={item.title}
                  />
                </div>
              </h4>
              <ul>
                {item.methos.map((desc, index) => (
                  <li
                    key={index}
                    className="flex items-center font-regular mb-[1vw]"
                    style={{ fontSize: "var(--fz-14)" }}
                  >
                    <span className="block w-[1vw] h-[1vw] bg-[#000000] mr-[2vw]" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p
          style={{
            fontSize: "var(--fz-12)",
            fontWeight: 400,
            color: "var(--basic-600)",
          }}
        >
          ※ 자차를 이용할 경우 주차 가능하지만 다소 공간이 협소할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
