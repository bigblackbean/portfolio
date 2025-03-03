import { StaticImageData } from "next/image";

import user from "/public/images/icons/user.svg";
import paper from "/public/images/icons/paper.svg";
import folder from "/public/images/icons/folder.svg";
import ppt from "/public/images/icons/ppt.svg";
import film from "/public/images/icons/film.svg";

export interface Navigator {
  name: string;
  url: string;
  icon: StaticImageData;
  description: string;
}

export const navList: Navigator[] = [
  {
    name: "프로필",
    url: "/profile",
    icon: user,
    description: "간단한 소개 및 정보",
  },
  {
    name: "경력",
    url: "/career",
    icon: paper,
    description: "업무를 진행한 내역",
  },
  {
    name: "작업물",
    url: "/contents",
    icon: folder,
    description: "진행하고 참여했던 프로젝트",
  },
  {
    name: "포폴",
    url: "/porfol",
    icon: ppt,
    description: "포트폴리오 제작내역",
  },
  {
    name: "발자취",
    url: "/history",
    icon: film,
    description: "이력에 대한 히스토리",
  },
];
