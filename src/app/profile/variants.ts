import { StaticImport } from "next/dist/shared/lib/get-img-props";

import figma from "@/images/logos/Figma.svg";
import react from "@/images/logos/React.svg";
import typescript from "@/images/logos/Typescript.svg";
import javascript from "@/images/logos/Javascript.svg";
import html from "@/images/logos/HTML5.svg";
import css from "@/images/logos/CSS3.svg";
import photoshop from "@/images/logos/Photoshop.svg";
import illustrator from "@/images/logos/Illustrator.svg";
import indesign from "@/images/logos/Indesign.svg";
import xd from "@/images/logos/XD.svg";
import notion from "@/images/logos/Notion.svg";
import slack from "@/images/logos/Slack.svg";

export interface Skill {
  name: string;
  image: StaticImport;
}

export interface Certi {
  name: string;
  period: string;
}

export const person = [
  "이강희",
  "1991.07.05",
  "서울 관악구 신림동",
  "010-2323-6929",
  "bigblackbean@naver.com",
  "INTP / ENTP",
];

export const certificate: Certi[] = [
  { name: "KPC 그래픽 전문강사", period: "2021/10" },
  { name: "GTQid(인디자인) 1급", period: "2021/08" },
  { name: "GTQi(일러스트레이터) 1급", period: "2021/07" },
  { name: "GTQ(포토샵) 1급", period: "2018/06" },
  { name: "웹디자인기능사", period: "2020/06" },
  { name: "컴퓨터활용능력 2급", period: "2016/10" },
  { name: "운전면허 1종 보통", period: "2011/10" },
];

export const skills: Skill[] = [
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Typescript",
    image: typescript,
  },
  {
    name: "Javascript",
    image: javascript,
  },
  {
    name: "HTML5",
    image: html,
  },
  {
    name: "CSS3",
    image: css,
  },
  {
    name: "Photoshop",
    image: photoshop,
  },
  {
    name: "Illustrator",
    image: illustrator,
  },
  {
    name: "Indesign",
    image: indesign,
  },
  {
    name: "Adobe XD",
    image: xd,
  },
  {
    name: "Notion",
    image: notion,
  },
  {
    name: "Slack",
    image: slack,
  },
];
