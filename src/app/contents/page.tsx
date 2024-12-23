import { projects } from "./utils";
import Bar from "../../components/bar";
import Content from "./components/content";

export default function Contents() {
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        background: "#f2f2f2",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Bar />
      <div style={{ height: "calc(100% - 36px)", overflow: "auto" }}>
        <h3
          style={{
            margin: "8px 0",
            fontSize: 20,
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Contents
        </h3>
        <div>
          {projects.map((project) => (
            <Content key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
