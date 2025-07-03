// "use client";

// import { useEffect, useRef } from "react";
// import { useKakaoLoader } from "@/lib/kakao/useKakaoLoader";

// export default function KakaoMap() {
//   const [loaded, error] = useKakaoLoader();
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!loaded || !mapRef.current) return;

//     const mapOption = {
//       center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 시청
//       level: 3,
//     };

//     const map = new window.kakao.maps.Map(mapRef.current, mapOption);

//     // 마커 추가 예시
//     const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978);
//     const marker = new window.kakao.maps.Marker({
//       position: markerPosition,
//     });
//     marker.setMap(map);
//   }, [loaded]);

//   if (error) return <div>지도를 불러오는데 실패했습니다.</div>;
//   if (!loaded) return <div>지도를 불러오는 중입니다...</div>;

//   return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
// }
