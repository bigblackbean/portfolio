"use client";

import { useEffect, useRef } from "react";
import { useNaverLoader } from "@/lib/naver/useNaverLoader";

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const loaded = useNaverLoader();

  useEffect(() => {
    const Lat = 37.484268420359186;
    const Lng = 126.88822307803;
    if (!loaded || !mapRef.current) return;

    const map = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(Lat, Lng), // 서울
      zoom: 10,
    });

    // 마커 추가 예시
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(Lat, Lng),
      map,
    });
  }, [loaded]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
