import PageTitle from "@/components/pageTitle";
import Bar from "../../components/bar";
import Accordion from "./components/accordion";

export default function Lesson() {
  return (
    <div className="modal-layer">
      <Bar />
      <div className="modal-container">
        <PageTitle name="Lesson" />
        <div style={{ padding: 10 }}>
          <p className="body2">
            컴퓨터 학원 강사로 직접 교육에 진행한 내용입니다.
            <br />
            자세한 내용을 보시려면 과정명을 클릭해 주세요.
          </p>
        </div>
        <Accordion />
      </div>
    </div>
  );
}
