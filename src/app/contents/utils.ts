import { StaticImageData } from "next/image";

import sofitWeb from "@/images/contents/project-01-sofitweb.jpg";
import sofitSeller from "@/images/contents/project-02-sofitseller.jpg";
import sofitAdmin from "@/images/contents/project-03-sofitadmin.jpg";
import sofitHome from "@/images/contents/project-04-sofithome.jpg";
import inconVes from "@/images/contents/project-05-inconves.jpg";
import inconKcity from "@/images/contents/project-06-inconkcity.jpg";
import inconKiapi from "@/images/contents/project-07-inconkiapi.jpg";
import inconGyeongju from "@/images/contents/project-08-incongyeongju.jpg";

export interface Role {
  id: number;
  header: string;
  score: number;
}

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  notice?: string;
  roles: Role[];
  button?: { name: string; url: string };
}

export const projects: Project[] = [
  {
    title: "쏘핏 웹앱서비스",
    description:
      "여성 스포츠웨어/언더웨어 셀렉트샵\n다양한 브랜드를 한 눈에 볼 수 있는 쇼핑 플랫폼\n스포츠웨어, 언더웨어에 대한 다양한 콘텐츠 소비와\n상품 구매까지 이어지는 서비스 경험을 제공",
    image: sofitWeb,
    roles: [
      { id: 0, header: "기획", score: 3 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 4 },
    ],
    button: { name: "사이트 바로가기", url: "https://web.sofit.kr" },
  },
  {
    title: "쏘핏 셀러 어드민(판매자 관리 서비스)",
    description:
      "쏘핏 서비스에 상품 등록 및 관리, 주문에 대한 처리 및 관리를 제공하는 서비스 PC환경으로 제공",
    image: sofitSeller,
    notice:
      "인가된 사용자만 접근이 가능합니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
    roles: [
      { id: 0, header: "기획", score: 2 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 4 },
    ],
    button: { name: "사이트 바로가기", url: "https://seller.sofit.kr" },
  },
  // {
  //   title: "쏘핏 사내 어드민",
  //   description:
  //     "쏘핏 서비스를 내부에서 관리하기 위해 사용하는 어드민페이지 콘텐츠 등록 및 관리, 이벤트 관리, 고객 관리 등 전체적인 관리를 담당하는 서비스",
  //   image: sofitAdmin,
  //   notice:
  //     "인가된 사용자만 접근이 가능합니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
  //   roles: [
  //     { id: 0, header: "기획", score: 5 },
  //     { id: 1, header: "디자인", score: 5 },
  //     { id: 2, header: "마크업", score: 5 },
  //     { id: 3, header: "FE", score: 5 },
  //   ],
  // },
  {
    title: "쏘핏 공식 홈페이지",
    description:
      "쏘핏에 대한 소개가 담긴 랜딩페이지 형식의 공식 홈페이지. 서비스에 대한 사용자, 입점 판매자를 위한 페이지로 안내",
    image: sofitHome,
    roles: [
      { id: 0, header: "기획", score: 4 },
      { id: 1, header: "디자인", score: 4 },
      { id: 2, header: "마크업", score: 5 },
      { id: 3, header: "FE", score: 5 },
    ],
    button: { name: "사이트 바로가기", url: "https://sofit.kr" },
  },
  {
    title: "K-City 화성 자율주행 시스템",
    description:
      "자율주행 차량 추적 관제 시스템 각종 돌발상황을 컨트롤, 대처하는 기능을 테스트. 모니터 12대를 이어붙인 스크린을 통해 확인",
    image: inconKcity,
    notice:
      "내부 전용 서비스입니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
    roles: [
      { id: 0, header: "기획", score: 0 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    title: "VES 영상지원시스템 모바일화",
    description:
      "경찰 공무원이 사건발생시 현장 CCTV를 확인하기 위한 시스템. 기존 PC환경을 통해 제공되던 서비스를 모바일에 웹앱 형태로 추가 제공하기 위해 작업",
    image: inconVes,
    notice:
      "내부 전용 서비스입니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
    roles: [
      { id: 0, header: "기획", score: 2 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    title: "KIAPI 대구 자율주행 시스템",
    description:
      "자율주행 차량 추적 관제 시스템 각종 돌발상황을 컨트롤, 대처하는 기능을 테스트",
    image: inconKiapi,
    notice:
      "내부 전용 서비스입니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
    roles: [
      { id: 0, header: "기획", score: 0 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
  {
    title: "경주 통합플랫폼 문화재 및 수문 관리 시스템",
    description:
      "경주시청에서 경주 내의 문화재의 상태관리와 수문의 상태 및 조작을 위한 시스템 문화재에 비상상활 발생시 빠른 대처를 위한 서비스 홍수 등을 방지하기 위해 물높이 등을 확인하여 수문 개방 및 패쇄를 컨트롤 할 수 있는 서비스",
    image: inconGyeongju,
    notice:
      "내부 전용 서비스입니다. 보안상의 이유로 직접 확인이 불가한 점 양해 부탁드립니다.",
    roles: [
      { id: 0, header: "기획", score: 1 },
      { id: 1, header: "디자인", score: 5 },
      { id: 2, header: "마크업", score: 5 },
    ],
  },
];
