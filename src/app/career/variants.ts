export interface Career {
  id: number;
  company: string;
  encompany: string;
  field: string;
  color: string;
  position: string;
  role: string;
}

export const careers: Career[] = [
  {
    id: 4,
    company: "쏘핏",
    encompany: "SOFIT",
    field: "스포츠웨어/언더웨어 쇼핑 플랫폼",
    color: "#2386fe",
    position: "UIUX디자이너/웹퍼블리셔/프론트엔지니어",
    role: "앱,웹 화면 기획, 콘텐츠 및 화면 디자인, 웹 서비스 제작 및 관리",
  },
  {
    id: 3,
    company: "인콘",
    encompany: "INCON",
    field: "통합 관제 시스템 솔루션",
    color: "#ed463c",
    position: "웹디자이너/웹퍼블리셔",
    role: "대시보드 화면 기획, 디자인, 퍼블리싱",
  },
  {
    id: 2,
    company: "하이미디어",
    encompany: "HIMEDIA",
    field: "컴퓨터 학원",
    color: "#dd2125",
    position: "강사",
    role: "광고콘텐츠, 웹디자인, 웹퍼블리싱, 이모티콘,피그마 강의",
  },
  {
    id: 1,
    company: "티몬",
    encompany: "TMON",
    field: "이커머스",
    color: "#e95506",
    position: "콘텐츠디자이너",
    role: "배너, 썸네일, 상세페이지, 프로모션페이지 제작",
  },
];
