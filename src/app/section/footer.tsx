import Image from "next/image";
import bg from "/public/images/footer/footer_bg.svg";
import kakao from "/public/images/footer/kakaotalk.svg";
import share from "/public/images/footer/share.svg";
import { domain } from "@/constant/domain";
import { useToast } from "@/context/ToastContext";
import { copyToClipboard } from "@/constant/copy";

export default function Footer() {
  const { showToast } = useToast();

  const shareContent = async ({
    title,
    text,
    url,
  }: {
    title: string;
    text?: string;
    url: string;
  }) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (err) {
        console.error(err);
      }
    } else {
      copyToClipboard("https://dasom.kanghee.kr")
        .then(() => showToast("링크를 복사했어요!"))
        .catch(() => showToast("어라..? 복사가 안됐어요!"));
    }
  };

  return (
    <div className="bg-[var(--bg-pink)] relative overflow-hidden">
      <div className="flex justify-end gap-[3vw] px-[4vw] relative top-[6vw]">
        {/* <button style={{ width: "10vw", height: "10vw" }} type="button">
          <Image src={kakao} alt="kakao" />
        </button> */}
        <button
          style={{ width: "10vw", height: "10vw" }}
          onClick={() =>
            shareContent({
              title: "강희&다솜 청첩장",
              text: "강희와 다솜이의 결혼식에 초대합니다!",
              url: domain,
            })
          }
          type="button"
        >
          <Image src={share} alt="share" />
        </button>
      </div>
      <div className="w-full text-center absolute top-[38vw] z-10">
        <p
          className="text-[var(--basic-0)] walter-turncoat-regular"
          style={{ fontSize: "var(--fz-30)" }}
        >
          THANK U
        </p>
      </div>
      <div className="relative w-[104vw] left-[-2vw] top-[1vw]">
        <Image src={bg} alt="background" />
      </div>
    </div>
  );
}
