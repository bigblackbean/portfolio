import { FunctionComponent } from "react";
import Bar from "../../components/bar";

const careers = [
  {
    company: "티몬",
    position: "콘텐츠디자이너",
    role: "배너, 썸네일, 상세페이지, 프로모션페이지 제작",
  },
  {
    company: "하이미디어컴퓨터학원",
    position: "",
    role: "광고콘텐츠, 웹디자인, 웹퍼블리싱, 이모티콘,피그마 강의",
  },
  {
    company: "인콘",
    position: "웹디자이너/웹퍼블리셔",
    role: "대시보드 화면 기획, 디자인, 퍼블리싱",
  },
  {
    company: "쏘핏",
    position: "UIUX디자이너/웹퍼블리셔/프론트엔지니어",
    role: "앱,웹 화면 기획, 콘텐츠 및 화면 디자인, 웹 서비스 제작 및 관리",
  },
];

const Career: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "80%",
        background: "#f2f2f2",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Bar />
      <div>
        <h3>Career</h3>
        <div>
          <ul>
            {careers.map((item) => (
              <li key={item.company}>
                <h4>{item.company}</h4>
                <p>{item.position}</p>
                <p>{item.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Career;
