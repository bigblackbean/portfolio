import Image from "next/image";

import { skills } from "../variants";
import Chat from "@/components/chat";

export default function Skills() {
  return (
    <Chat direction="left" profile>
      <p>제가 다루는 프로그램 및 프로그래밍 언어입니다.</p>
      <br />
      <ul>
        {skills.map((item) => (
          <li key={item.name} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Image width={24} src={item.image} alt={item.name} />
              <p className="h4">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </Chat>
  );
}
