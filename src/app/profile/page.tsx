import { FunctionComponent } from "react";
import Bar from "../components/bar";

const person = [
  "이강희",
  "1991.07.05",
  "서울 관악구 신림동",
  "bigblackbean@naver.com",
];

const certificate = [
  "웹디자인기능사",
  "운전면허 1종보통",
  "KPC 그래픽 전문강사",
  "컴퓨터활용능력 2급",
];

const skills = [
  "figma",
  "photoshop",
  "illustrator",
  "typescript",
  "javascript",
  "html",
  "css",
  "notion",
];

const Profile: FunctionComponent = () => {
  return (
    <div>
      <Bar />
      <div>
        <h3>Profile</h3>
        <div>
          <h4>인적사항</h4>
          <ul>
            {person.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>자격증</h4>
          <ul>
            {certificate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>기술</h4>
          <ul>
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
