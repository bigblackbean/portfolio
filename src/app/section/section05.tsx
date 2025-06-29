"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import styles from "@/styles/section.module.css";
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

export default function Section05() {
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
      <div style={{ width: "100%", padding: 16 }}>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
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
        </Swiper>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Image src={mainphoto} alt="main" />
      </div>
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
  );
}
