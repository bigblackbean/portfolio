import Image from "next/image";
import { Project } from "../utils";
import MarkTable from "./markTable";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function FullImage({
  image,
  alt,
}: {
  image: StaticImport;
  alt: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Image src={image} alt={alt} />
    </div>
  );
}

export default function Content({ project }: { project: Project }) {
  return (
    <div
      style={{
        padding: "20px 20px 40px 20px",
        borderBottom: "1px dashed var(--Basic-400)",
      }}
    >
      <h3 className="h3" style={{ margin: "16px 0" }}>
        {project.title}
      </h3>
      <p className="body2">{project.description}</p>
      <div style={{ margin: "16px 0", position: "relative" }}>
        <Image src={project.image} alt={project.title} />
        {/* <button
          style={{ color: "#fff", position: "absolute", top: 10, left: 10 }}
          type="button"
        >
          크게보기
        </button> */}
        {project.button && (
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
            }}
          >
            <a
              href={project.button.url}
              className="body1"
              target="_blank"
              style={{
                display: "block",
                padding: "8px 16px",
                border: "1px solid var(--Basic-0)",
                borderRadius: 20,
                color: "#fff",
                backgroundColor: "var(--Basic-900)",
              }}
            >
              {project.button.name}
            </a>
          </div>
        )}
      </div>
      <MarkTable roles={project.roles} />
      {project.notice && (
        <p
          className="body2"
          style={{ margin: "8px 0", color: "var(--Basic-500)" }}
        >
          {project.notice}
        </p>
      )}
      {/* <FullImage image={project.image} alt={project.title} /> */}
    </div>
  );
}
