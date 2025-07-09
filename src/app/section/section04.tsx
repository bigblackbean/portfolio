import Image from "next/image";
import dasom from "/public/images/section04/dasom.png";
import kanghee from "/public/images/section04/kanghee.png";
import bridebg from "/public/images/section04/bride_bg.svg";
import groombg from "/public/images/section04/groom_bg.svg";
import twinkle from "/public/images/section04/twinkle.svg";
import heart from "/public/images/section04/heart.svg";
import leftarrow from "/public/images/icons/left-arrow.svg";
import rightarrow from "/public/images/icons/right-arrow.svg";

import { useModal } from "@/context/ModalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mainphoto from "/public/images/section05/main_photo.png";
import gallery01 from "/public/images/section05/gallery_01.png";
import gallery02 from "/public/images/section05/gallery_02.png";
import gallery03 from "/public/images/section05/gallery_03.png";
import gallery04 from "/public/images/section05/gallery_04.png";
import gallery05 from "/public/images/section05/gallery_05.png";
import gallery06 from "/public/images/section05/gallery_06.png";
import gallery07 from "/public/images/section05/gallery_07.png";
import gallery08 from "/public/images/section05/gallery_08.png";
import gallery09 from "/public/images/section05/gallery_09.png";
import gallery10 from "/public/images/section05/gallery_10.png";
import gallery11 from "/public/images/section05/gallery_11.png";
import gallery12 from "/public/images/section05/gallery_12.png";

export default function Section04() {
  const { openModal } = useModal();

  const galleries = [
    { id: 1, img: gallery01, alt: "gallery01" },
    { id: 2, img: gallery02, alt: "gallery02" },
    { id: 3, img: gallery03, alt: "gallery03" },
    { id: 4, img: gallery04, alt: "gallery04" },
    { id: 5, img: gallery05, alt: "gallery05" },
    { id: 6, img: gallery06, alt: "gallery06" },
    { id: 7, img: gallery07, alt: "gallery07" },
    { id: 8, img: gallery08, alt: "gallery08" },
    { id: 9, img: gallery09, alt: "gallery09" },
    { id: 10, img: gallery10, alt: "gallery10" },
    { id: 11, img: gallery11, alt: "gallery11" },
    { id: 12, img: gallery12, alt: "gallery12" },
  ];

  const openGallery = (index: number) => {
    openModal(
      <>
        <style>
          {`
          .swiper-pagination-progressbar-fill {
            background: #CD6485 !important;
          }
        `}
        </style>
        <div style={{ width: "100%", padding: "4vw" }}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: ".prevEl", nextEl: ".nextEl" }}
            pagination={{ clickable: true, type: "progressbar", el: ".pagi" }}
            loop
            initialSlide={index}
          >
            {galleries.map((item) => (
              <SwiperSlide key={item.id}>
                <div style={{ display: "block", width: "100%" }}>
                  <Image src={item.img} alt={item.alt} />
                </div>
              </SwiperSlide>
            ))}
            <div className="prevEl w-[7vw] absolute z-20 top-1/2 -translate-y-1/2 left-[2vw] opacity-60 bg-black rounded-full p-[1vw]">
              <Image src={leftarrow} alt="arrow" />
            </div>
            <div className="nextEl w-[7vw] absolute z-20 top-1/2 -translate-y-1/2 right-[2vw] opacity-60 bg-black rounded-full p-[1vw]">
              <Image src={rightarrow} alt="arrow" />
            </div>
            <div className="pagi z-20 !top-full -translate-y-full" />
          </Swiper>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="relative overflow-hidden z-10">
        <p
          className="text-[var(--basic-0)] text-center uhbee-zziba"
          style={{ fontSize: "var(--fz-16)" }}
        >
          세상 단 하나뿐인 진실, 고백해
          <br />
          내 맘의 공백엔 노래와 그대만 존재해
          <br />
          <br />
          내가 한 방울의 물을 원할 땐 바다를,
          <br />
          또 내가 한알의 모래를 원한 땐 사막을 주는 너
          <br />
          <br />
          <span>에픽하이 {`<HEAVEN>`} 중에서</span>
        </p>

        <div className="w-[76%] relative">
          <div className="relative left-[-2vw]">
            <Image src={groombg} alt="groom bg" />
          </div>
          <div className="text-[var(--basic-0)] absolute top-[50vw] left-[10vw] text-center">
            <p style={{ fontSize: "var(--fz-16)" }}>GROOM</p>
            <p style={{ fontSize: "var(--fz-16)", fontWeight: 600 }}>
              LEE KANGHEE
            </p>
          </div>
        </div>
        <div className="w-full absolute top-[80vw]">
          <Image src={kanghee} alt="kanghee" className="fade-in" />
        </div>
        <div className="w-[28vw] absolute top-[58vw] left-[62vw]">
          <Image src={twinkle} alt="twinkle" className="gelatine" />
        </div>
        <div className="w-full absolute top-[148vw]">
          <Image src={dasom} alt="dasom" />
        </div>
        <div className="w-[12vw] absolute top-[180vw] left-[54vw] rotate-90">
          <Image src={heart} alt="heart" className="gelatine" />
        </div>
        <div className="w-[104vw] mt-[38vw] relative">
          <Image src={bridebg} alt="bride bg" />
          <div className="text-[var(--basic-0)] absolute top-[17vw] left-[64vw] text-center">
            <p style={{ fontSize: "var(--fz-16)" }}>BRIDE</p>
            <p style={{ fontSize: "var(--fz-16)", fontWeight: 600 }}>
              SO DASOM
            </p>
          </div>
        </div>
      </div>

      <div className="relative top-[-18vw] z-0">
        <div>
          <Image src={mainphoto} alt="main" />
        </div>
      </div>
      <div className="relative top-[-18vw]">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {galleries.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openGallery(index)}
              type="button"
            >
              <Image src={item.img} alt={item.alt} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
