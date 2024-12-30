export interface Career {
  id: number;
  company: string;
  position: string;
  role: string;
}

export const careers: Career[] = [
  {
    id: 1,
    company: "티몬",
    position: "콘텐츠디자이너",
    role: "배너, 썸네일, 상세페이지, 프로모션페이지 제작",
  },
  {
    id: 2,
    company: "하이미디어컴퓨터학원",
    position: "강사",
    role: "광고콘텐츠, 웹디자인, 웹퍼블리싱, 이모티콘,피그마 강의",
  },
  {
    id: 3,
    company: "인콘",
    position: "웹디자이너/웹퍼블리셔",
    role: "대시보드 화면 기획, 디자인, 퍼블리싱",
  },
  {
    id: 4,
    company: "쏘핏",
    position: "UIUX디자이너/웹퍼블리셔/프론트엔지니어",
    role: "앱,웹 화면 기획, 콘텐츠 및 화면 디자인, 웹 서비스 제작 및 관리",
  },
];
