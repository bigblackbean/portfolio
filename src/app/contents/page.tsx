import { projects } from "./variants";
import Content from "./components/content";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

export default function Contents() {
  return (
    <Frame>
      <Nav />
      <Container title="작업물">
        <Chat direction="right">
          <p>참여한 프로젝트에 대해서 알려주세요.</p>
        </Chat>
        {projects.map((project) => (
          <Content key={project.id} project={project} />
        ))}
      </Container>
    </Frame>
  );
}
