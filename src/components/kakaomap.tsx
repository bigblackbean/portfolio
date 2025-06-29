"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (!mapRef.current) return;

          const mapOption = {
            center: new window.kakao.maps.LatLng(37.54699, 127.09598),
            level: 4,
          };
          const map = new window.kakao.maps.Map(mapRef.current, mapOption);

          const imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
            imageSize = new window.kakao.maps.Size(64, 69),
            imageOption = { offset: new window.kakao.maps.Point(27, 69) };

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

          const markerPosition = new window.kakao.maps.LatLng(
            37.54699,
            127.09598
          );

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });

          marker.setMap(map);
        });
      }
    };

    // kakao sdk 스크립트 삽입
    const scriptId = "kakao-map-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
      script.async = true;
      script.onload = loadKakaoMap;
      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "350px" }} />;
}
