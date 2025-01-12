import { FunctionComponent } from "react";
import Accordion from "./components/accordion";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

const History: FunctionComponent = () => {
  return (
    <Frame>
      <Nav />
      <Container title="발자취">
        <Chat direction="right">
          <p>
            다양한 분야를 경험하게 된 계기와
            <br />
            현재 프론트엔드 개발자로 일하려는 이유는 무엇인가요?
          </p>
        </Chat>
        <Chat direction="left">
          <p>
            처음부터 지금까지 직무를 변경해 오기 까지의 과정입니다.
            <br />
            더보기 버튼을 클릭하시면, 자세한 이야기를 보실 수 있습니다.
          </p>
        </Chat>
        <Accordion />
      </Container>
    </Frame>
  );
};
export default History;
