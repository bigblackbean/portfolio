import Image from "next/image";
import { Project } from "../utils";
import MarkTable from "./markTable";

export default function Content({ project }: { project: Project }) {
  return (
    <div style={{ padding: 10 }}>
      <h4 style={{ margin: "16px 0", fontWeight: 700 }}>{project.title}</h4>
      <p style={{ fontSize: 14, wordBreak: "keep-all" }}>
        {project.description}
      </p>
      <div style={{ margin: "16px 0" }}>
        <Image src={project.image} alt={project.title} />
      </div>
      {project.notice && (
        <p style={{ margin: "8px 0", fontSize: 14, color: "#999" }}>
          {project.notice}
        </p>
      )}
      <MarkTable roles={project.roles} />
      {project.button && (
        <div style={{ margin: "16px 0", textAlign: "center" }}>
          <a
            href={project.button.url}
            target="_blank"
            style={{
              padding: "8px 16px",
              borderRadius: 17,
              color: "#fff",
              fontSize: 14,
              backgroundColor: "#000",
            }}
          >
            {project.button.name}
          </a>
        </div>
      )}
    </div>
  );
}
