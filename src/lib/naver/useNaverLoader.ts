"use client";

import { useEffect, useState } from "react";

export function useNaverLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 이미 로드되었는지 확인
    if (typeof window !== "undefined" && window.naver?.maps) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return loaded;
}
