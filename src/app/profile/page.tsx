import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";
import Person from "./components/person";
import Certificate from "./components/certificate";
import Skills from "./components/skills";

export default function Profile() {
  return (
    <Frame>
      <Nav />
      <Container title="프로필">
        <Chat direction="right">
          <p>프로필을 알려주세요.</p>
        </Chat>
        <Person />
        <Chat direction="right">
          <p>자격증은 어떤 게 있나요?</p>
        </Chat>
        <Certificate />
        <Chat direction="right">
          <p>사용할 수 있는 프로그램, 언어 등은 무엇이 있나요?</p>
        </Chat>
        <Skills />
      </Container>
    </Frame>
  );
}
