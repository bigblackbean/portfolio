import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export interface Skill {
  name: string;
  image: StaticImageData;
}

export const logoColor: {
  [key: string]: { background: string; font: string };
} = {
  React: { background: "#000B1D", font: "#ffffff" },
  Typescript: { background: "#3178C6", font: "#ffffff" },
  Javascript: { background: "#F7DF1E", font: "#000000" },
  HTML: { background: "#F16529", font: "#ffffff" },
  CSS: { background: "#2965F1", font: "#ffffff" },
  "Rest API": { background: "#CED7DE", font: "#000000" },
  Figma: { background: "#000B1D", font: "#ffffff" },
  "Adobe XD": { background: "#470137", font: "#ffffff" },
};
