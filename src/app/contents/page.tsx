import { projects } from "./utils";
import Bar from "../../components/bar";
import Content from "./components/content";
import PageTitle from "@/components/pageTitle";
import Frame from "@/components/frame";
import Container from "@/components/container";

export default function Contents() {
  return (
    <Frame>
      <Bar />
      <Container>
        <PageTitle name="Contents" />
        <div>
          {projects.map((project) => (
            <Content key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Frame>
  );
}
