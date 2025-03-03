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
    position: "프론트엔드개발자/웹퍼블리셔/UI&UX디자이너",
    role: "웹서비스 개발 및 유지보수, 사용자 화면 디자인 및 기획",
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
    role: "웹디자이너/웹퍼블리셔 양성 과정, 그래픽 디자인 및 자격증 강의",
  },
  {
    id: 1,
    company: "티몬",
    encompany: "TMON",
    field: "이커머스",
    color: "#e95506",
    position: "콘텐츠디자이너",
    role: "배너, 썸네일, 상세페이지, 프로모션페이지 디자인",
  },
];
