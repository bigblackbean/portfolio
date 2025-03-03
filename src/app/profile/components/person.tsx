import { person } from "../variants";
import Chat from "@/components/chat";

export default function Person() {
  return (
    <Chat direction="left" profile>
      <p>안녕하세요, 저에 대해 간단히 소개드립니다.</p>
      <br />
      <ul>
        {person.map((item) => (
          <li key={item.id}>
            <p>
              <span style={{ marginRight: 8, color: "var(--basic-500)" }}>
                {item.question}
              </span>
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
    </Chat>
  );
}
