import { projects } from "./variants";
import Content from "./components/content";
import PageTitle from "@/components/page-title";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";

export default function Contents() {
  return (
    <Frame>
      <Nav />
      <Container>
        <PageTitle name="작업물" />
        <div>
          {projects.map((project) => (
            <Content key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Frame>
  );
}
