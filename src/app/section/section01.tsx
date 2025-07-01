import bg from "/public/images/section01/background.svg";
import circle from "/public/images/section01/circle.svg";
import twinkle from "/public/images/section01/twinkle.svg";
import Image from "next/image";

export default function Section01() {
  return (
    <div className="py-[10vw] bg-[var(--basic-900)] relative overflow-hidden">
      <div className="w-[108vw] relative left-[-4vw]">
        <Image src={bg} alt="background" />
      </div>
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: "80%",
            position: "relative",
            top: "-8vw",
            left: "14vw",
          }}
        >
          <Image src={circle} alt="circle" />
        </div>
        <div
          style={{
            width: "5.4vw",
            position: "absolute",
            top: "46vw",
            left: "14vw",
          }}
        >
          <Image src={twinkle} alt="twinkle" />
        </div>
        <div
          className="w-full text-center"
          style={{
            color: "var(--basic-0)",
            position: "relative",
            top: "-14vw",
          }}
        >
          <p style={{ fontSize: "var(--fz-18)" }}>
            <span style={{ fontSize: "var(--fz-20)", fontWeight: 600 }}>
              2025.09.13 SAT 02:00PM
            </span>
            <br />
            VENUEVIAN WEDDING
            <br />
            서울 영등포구 신길로 89 베뉴비안 웨딩
          </p>
        </div>
      </div>
    </div>
  );
}
