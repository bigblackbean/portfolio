import { certificate } from "../variants";
import Chat from "@/components/chat";

export default function Certificate() {
  return (
    <Chat direction="left">
      <p>자격증과 취득일입니다.</p>
      <br />
      <ul>
        {certificate.map((item) => (
          <li key={item.name}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ marginRight: 20 }}>{item.name}</p>
              <p style={{ color: "var(--basic-500)" }}>{item.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </Chat>
  );
}
