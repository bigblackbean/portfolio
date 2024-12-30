import { projects } from "./utils";
import Bar from "../../components/bar";
import Content from "./components/content";
import PageTitle from "@/components/pageTitle";

export default function Contents() {
  return (
    <div className="modal-layer">
      <Bar />
      <div className="modal-container">
        <PageTitle name="Contents" />
        <div>
          {projects.map((project) => (
            <Content key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
