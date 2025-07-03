// "use client";

// import { useEffect, useState } from "react";

// export function useKakaoLoader() {
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     // 이미 로드되었으면 무시
//     if (typeof window !== "undefined" && window.kakao && window.kakao.maps) {
//       setLoaded(true);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
//     script.async = true;

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         setLoaded(true);
//       });
//     };

//     script.onerror = () => {
//       setError(true);
//     };

//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return [loaded, error] as const;
// }
