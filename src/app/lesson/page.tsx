import Accordion from "./components/accordion";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

export default function Lesson() {
  return (
    <Frame>
      <Nav />
      <Container title="교육">
        <Chat direction="right">
          <p>강사로 강의했던 내용에 대해 알려주세요.</p>
        </Chat>
        <Chat direction="left">
          <p>강사로 진행했던 강의 내용을 간략히 말씀드릴게요.</p>
          <p>궁금한 과정을 클릭하시면, 자세한 내용을 보실 수 있습니다.</p>
        </Chat>
        <Accordion />
      </Container>
    </Frame>
  );
}
