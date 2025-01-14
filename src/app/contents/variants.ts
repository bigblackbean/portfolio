import { StaticImageData } from "next/image";

import sofitWeb from "/public/images/contents/project-01-sofitweb.jpg";
import sofitSeller from "/public/images/contents/project-02-sofitseller.jpg";
import sofitAdmin from "/public/images/contents/project-03-sofitadmin.jpg";
import sofitHome from "/public/images/contents/project-04-sofithome.jpg";
import inconVes from "/public/images/contents/project-05-inconves.jpg";
import inconKcity from "/public/images/contents/project-06-inconkcity.jpg";
import inconKiapi from "/public/images/contents/project-07-inconkiapi.jpg";
import inconGyeongju from "/public/images/contents/project-08-incongyeongju.jpg";

export interface Role {
  id: number;
  header: string;
  score: number;
}

export interface Project {
  id: number;
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
      title: "쏘핏 웹앱 서비스",
      sub: "여성 스포츠웨어/언더웨어 쇼핑 플랫폼",
      thumbnail: sofitWeb,
      url: "https://web.sofit.kr",
    },
    description: [
      "여성 위주의 스포츠웨어와 언더웨어 브랜드를 한 눈에 볼 수 있는 쇼핑 플랫폼 서비스입니다.",
      "다양한 콘텐츠와 상품 구매까지 이어지는 서비스 경험을 제공합니다.",
      "플레이스토어 및 앱스토어에서 다운받을 수 있습니다.",
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
      title: "쏘핏 셀러 서비스",
      sub: "쏘핏 플랫폼 판매자 어드민 웹 서비스",
      thumbnail: sofitSeller,
      // url: "https://seller.sofit.kr",
      notice: "입점 판매자만 확인 가능한 서비스입니다.",
    },
    description: [
      "쏘핏 플랫폼에 입점한 판매자가 상품 등록 및 관리, 주문에 대한 처리 및 관리를 제공하는 서비스입니다.",
      "PC환경을 기준으로 제작되었습니다.",
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
      title: "쏘핏 어드민",
      sub: "쏘핏 사내 관리자 웹 서비스",
      thumbnail: sofitAdmin,
      // url: "https://admin.sofit.kr",
      notice: "내부 직원만 접근 가능한 서비스입니다.",
    },
    description: [
      "쏘핏 플랫폼 혹은 관련 서비스를 관리하는 내부 직원 전용 서비스입니다.",
      "콘텐츠 등록 및 관리, 이벤트 관리, 매출 확인, 판매자 및 고객 관리 등을 진행할 수 있는 서비스입니다.",
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
    description: [
      "쏘핏 서비스에 대한 소개가 담긴 랜딩페이지 형식의 공식 홈페이지입니다.",
      "쏘핏 플랫폼 서비스를 이용하는 고객과 입점하는 판매자를 위한 페이지로 나뉘어서 안내합니다.",
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
    description: [
      "자율주행 차량을 추적하는 관제 시스템입니다.",
      "각종 돌발상황을 제어하고 차량이 이벤트에 대처하는 기능을 테스트합니다.",
      "모니터 12대를 이어붙인 스크린을 통해 확인하는 특징이 있습니다.",
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
    description: [
      "경찰 공무원이 사건발생시 현장 CCTV를 확인하기 위한 시스템입니다.",
      "기존 PC환경을 통해 제공되던 시스템을 모바일에 웹앱 형태로 추가 제공하기 위해 작업한 프로젝트입니다.",
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
    description: [
      "자율주행 차량을 추적하는 관제 시스템입니다.",
      "각종 돌발상황을 제어하고 차량이 이벤트에 대처하는 기능을 테스트합니다.",
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
    description: [
      "경주시청에서 경주 내의 문화재의 관제, 수문의 상태 및 조작을 위한 시스템입니다.",
      "문화재에 비상상황 발생시 빠른 대응을 위해 관리합니다.",
      "물높이를 확인하여 수문 개방 및 패쇄를 컨트롤할 수 있는 기능이 있습니다.",
    ],
    roles: [
      { id: 0, header: "기획", score: 1 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
];
