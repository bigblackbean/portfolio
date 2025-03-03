import { StaticImageData } from "next/image";

import { Skill } from "../../variants/logo";

import sofitWeb from "/public/images/contents/project-01-sofitweb.jpg";
import sofitSeller from "/public/images/contents/project-02-sofitseller.jpg";
import sofitAdmin from "/public/images/contents/project-03-sofitadmin.jpg";
import sofitHome from "/public/images/contents/project-04-sofithome.jpg";
import inconVes from "/public/images/contents/project-05-inconves.jpg";
import inconKcity from "/public/images/contents/project-06-inconkcity.jpg";
import inconKiapi from "/public/images/contents/project-07-inconkiapi.jpg";
import inconGyeongju from "/public/images/contents/project-08-incongyeongju.jpg";

import figma from "/public/images/logos/Figma.svg";
import react from "/public/images/logos/React.svg";
import typescript from "/public/images/logos/Typescript.svg";
import javascript from "/public/images/logos/Javascript.svg";
import html from "/public/images/logos/HTML5.svg";
import css from "/public/images/logos/CSS3.svg";
import xd from "/public/images/logos/XD.svg";
import restapi from "/public/images/logos/RestAPI.svg";

export interface Role {
  id: number;
  header: string;
  score: number;
}

export interface Project {
  id: number;
  skills: Skill[];
  image: {
    title: string;
    sub: string;
    thumbnail: StaticImageData;
    url?: string;
    notice?: string;
  };
  description: string[];
  roles: Role[];
}

export const projects: Project[] = [
  {
    id: 8,
    image: {
      title: "쏘핏 플랫폼 웹앱 서비스",
      sub: "스포츠웨어/언더웨어 쇼핑 플랫폼",
      thumbnail: sofitWeb,
      url: "https://web.sofit.kr",
    },
    skills: [
      { name: "React", image: react },
      { name: "Typescript", image: typescript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Rest API", image: restapi },
      { name: "Figma", image: figma },
    ],
    description: [
      "앱 내부 전체 웹뷰로 페이지 제작",
      "메인/검색/장바구니/결제/콘텐츠 등 각종 페이지 구현",
      "인기순위 실시간 불러오기 기능 구현",
      "상품목록 무한 스크롤 기능 구현",
      "고객 맞춤 사이즈 상품 추천 기능 구현",
      "전체 페이지 디자인 제작",
    ],
    roles: [
      { id: 0, header: "기획", score: 3 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 4 },
    ],
  },
  {
    id: 7,
    image: {
      title: "쏘핏 플랫폼 판매자 어드민",
      sub: "쏘핏 플랫폼 판매자 어드민 웹 서비스",
      thumbnail: sofitSeller,
      // url: "https://seller.sofit.kr",
      notice: "입점 판매자만 확인 가능한 서비스입니다.",
    },
    skills: [
      { name: "React", image: react },
      { name: "Typescript", image: typescript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Rest API", image: restapi },
      { name: "Figma", image: figma },
    ],
    description: [
      "주문목록 엑셀 Import 기능 구현",
      "주문목록 엑셀 Export 기능 구현",
      "상품 할인 가격 계산 기능 구현",
      "상품 옵션 N개 설정 / 옵션 값에 따른 재고 저장 기능 구현",
      "관리 상품 내 묶음 배송 기능 구현",
    ],
    roles: [
      { id: 0, header: "기획", score: 2 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 4 },
    ],
  },
  {
    id: 6,
    image: {
      title: "쏘핏 플랫폼 어드민",
      sub: "쏘핏 사내 관리자 웹 서비스",
      thumbnail: sofitAdmin,
      // url: "https://admin.sofit.kr",
      notice: "내부 직원만 접근 가능한 서비스입니다.",
    },
    skills: [
      { name: "React", image: react },
      { name: "Typescript", image: typescript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Rest API", image: restapi },
      { name: "Figma", image: figma },
    ],
    description: [
      "모든 페이지 내용 기획 및 API 형태에 대해 서버개발자에게 선 제안하며 주도적 진행",
      "기획전 에디터: 시간 제한으로 페이지 열고 닫힘",
      "기획전 에디터: 스톱워치 기능으로 판매 시간 알림",
      "기획전 에디터: 설정한 코드로 링크 공유 기능 (고객들에게 전달)",
      "기획전 에디터: 다양한 형태의 콘텐츠 삽입 기능 (이미지, 텍스트, 영상)",
      "주문 관리: 검색 조건을 지정 혹은 제외한 조회 기능",
      "주문 관리: 정산여부 처리 기능",
      "기간 할인: 엑셀 업로드 중 내부 데이터 검토 (할인율 확인, 데이터 길이 및 오타 확인)",
    ],
    roles: [
      { id: 0, header: "기획", score: 5 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 5 },
    ],
  },
  {
    id: 5,
    image: {
      title: "쏘핏 공식 홈페이지",
      sub: "쏘핏 플랫폼 서비스 소개",
      thumbnail: sofitHome,
      url: "https://sofit.kr",
    },
    skills: [
      { name: "Javascript", image: javascript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Rest API", image: restapi },
      { name: "Figma", image: figma },
    ],
    description: [
      "SSR방식의 홈페이지 제작",
      "VanillaScript 사용한 동작 구현 및 API 통신",
      "인스타그램 게시글 데이터 불러오기 구현",
      "SEO checker 100점 도달",
    ],
    roles: [
      { id: 0, header: "기획", score: 4 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 5 },
    ],
  },
  {
    id: 4,
    image: {
      title: "K-City 화성 자율주행 시스템",
      sub: "화성에 위차한 자율주행 테스트 관제 시스템",
      thumbnail: inconKcity,
      url: "https://url.kr/4ftanx",
      notice: "시설 내부 시스템입니다. 관련 기사 링크로 대체합니다.",
    },
    skills: [
      { name: "Javascript", image: javascript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Adobe XD", image: xd },
    ],
    description: [
      "자율주행 차량을 추적하는 관제 시스템",
      "특수한 형태의 프레임 SVG로 제작",
      "대형 스크린에 맞는 전체 반응형으로 비율 단위 구현",
    ],
    roles: [
      { id: 0, header: "기획", score: 0 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    id: 3,
    image: {
      title: "VES 영상지원시스템 모바일화",
      sub: "경찰 공무원의 CCTV 영상 확인 모바일 시스템",
      thumbnail: inconVes,
      notice: "시설 내부 시스템입니다.",
    },
    skills: [
      { name: "Javascript", image: javascript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Adobe XD", image: xd },
    ],
    description: [
      "모바일 웹뷰 UI 설계",
      "PC형태의 시스템을 모바일 형태로 재설계",
    ],
    roles: [
      { id: 0, header: "기획", score: 2 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    id: 2,
    image: {
      title: "KIAPI 대구 자율주행 시스템",
      sub: "대구에 위치한 자율주행 테스트 관제 시스템",
      thumbnail: inconKiapi,
      notice: "시설 내부 시스템입니다.",
    },
    skills: [
      { name: "Javascript", image: javascript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Adobe XD", image: xd },
    ],
    description: [
      "화성 시스템의 디자인을 보고 들어온 의뢰",
      "전체 반응형 비율 단위로 제작",
    ],
    roles: [
      { id: 0, header: "기획", score: 0 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    id: 1,
    image: {
      title: "경주 통합플랫폼",
      sub: "경주의 문화재 시설 및 수문 관리 시스템",
      thumbnail: inconGyeongju,
      notice: "시설 내부 시스템입니다.",
    },
    skills: [
      { name: "Javascript", image: javascript },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Adobe XD", image: xd },
    ],
    description: [
      "수문제어 열고 닫힘에 애니메이션 구현",
      "내부 레이어 팝업 형태의 창 디자인",
    ],
    roles: [
      { id: 0, header: "기획", score: 1 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
];
