import Bar from "../../components/bar";
import Accordion from "./components/accordion";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";

export default function Lesson() {
  return (
    <Frame>
      <Nav />
      <Container title="교육">
        {/* <div style={{ padding: "20px 20px 0 20px" }}>
          <p className="body2">
            컴퓨터 학원 강사로 직접 교육에 진행한 내용입니다.
            <br />
            자세한 내용을 보시려면 과정명을 클릭해 주세요.
          </p>
        </div> */}
        <Accordion />
      </Container>
    </Frame>
  );
}
