import figma from "/public/images/logos/Figma.svg";
import react from "/public/images/logos/React.svg";
import typescript from "/public/images/logos/Typescript.svg";
import javascript from "/public/images/logos/Javascript.svg";
import html from "/public/images/logos/HTML5.svg";
import css from "/public/images/logos/CSS3.svg";
import photoshop from "/public/images/logos/Photoshop.svg";
import illustrator from "/public/images/logos/Illustrator.svg";
import indesign from "/public/images/logos/Indesign.svg";
import xd from "/public/images/logos/XD.svg";
import notion from "/public/images/logos/Notion.svg";
import slack from "/public/images/logos/Slack.svg";
import { Skill } from "../../variants/logo";

export interface Intro {
  id: number;
  question: string;
  answer: string;
}

export interface Certi {
  name: string;
  period: string;
}

export const person: Intro[] = [
  { id: 1, question: "이름은", answer: "이강희" },
  { id: 2, question: "생년월일은", answer: "1991.07.05" },
  { id: 3, question: "사는 곳은", answer: "서울 관악구 신림동" },
  { id: 4, question: "전화번호는", answer: "010-2323-6929" },
  { id: 5, question: "이메일은", answer: "bigblackbean@naver.com" },
  { id: 6, question: "MBTI는", answer: "INTP / ENTP" },
];

export const certificate: Certi[] = [
  { name: "웹디자인기능사", period: "2020/06" },
  { name: "GTQ 1급", period: "2018/06" },
  { name: "컴퓨터활용능력 2급", period: "2016/10" },
  { name: "운전면허 1종 보통", period: "2011/10" },
];

export const skills: Skill[] = [
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
    name: "Figma",
    image: figma,
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
