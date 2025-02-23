"use client";

import Image from "next/image";
// import { useState } from "react";

import styles from "@/styles/contents.module.css";
import { Project } from "../variants";
import MarkTable from "./mark-table";
// import expand from "/public/images/icons/expand.svg";
// import FullImage from "@/components/full-image";
import Chat from "@/components/chat";
import SkillBlocks from "./skill-blocks";

export default function Content({ project }: { project: Project }) {
  // const [fullScreen, setFullScreen] = useState<boolean>(false);
  return (
    <div className={styles.content}>
      <Chat direction="left" profile image>
        <div className={styles.thumbnail}>
          <Image src={project.image.thumbnail} alt={project.image.title} />
        </div>
        <h4 className="h4">{project.image.title}</h4>
        <p className="body2">{project.image.sub}</p>
        {project.image.url && (
          <a
            href={project.image.url}
            target="_blank"
            className={`${styles.link} body3`}
          >
            {project.image.url}
          </a>
        )}
        {project.image.notice && (
          <p className={`${styles.notice} body3`}>{project.image.notice}</p>
        )}
      </Chat>
      <Chat direction="left">
        <div style={{ marginBottom: 10 }}>
          <SkillBlocks skills={project.skills} />
        </div>
        <div style={{ marginBottom: 10 }}>
          {project.description.map((item, index) => (
            <div key={index}>
              <p style={{ display: "flex", alignItems: "flex-start" }}>
                <span
                  style={{
                    display: "block",
                    borderLeft: "4px solid var(--basic-900)",
                    borderTop: "3px solid transparent",
                    borderBottom: "4px solid transparent",
                    margin: "6.5px 4px 0 0",
                  }}
                />
                {item}
              </p>
            </div>
          ))}
        </div>
        <MarkTable roles={project.roles} />
      </Chat>
    </div>
  );
}
