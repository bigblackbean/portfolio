import Image from "next/image";
import { Skill, logoColor } from "@/app/variants";

export default function SkillBlocks({ skills }: { skills: Skill[] }) {
  return (
    <div>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {skills.map((item) => (
          <li
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1px 8px 1px 4px",
              borderRadius: 6,
              color: logoColor[item.name].font,
              background: logoColor[item.name].background,
            }}
          >
            <Image width={16} src={item.image} alt={item.name} />
            <p className="button2">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
