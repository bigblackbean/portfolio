import Image from "next/image";

import { certificate, person, skills } from "./variants";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

export function Person() {
  return (
    <Chat direction="left" profile>
      <>
        <p>안녕하세요,</p>
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
      </>
    </Chat>
  );
}

export function Certificate() {
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

export function Skills() {
  return (
    <Chat direction="left">
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

export default function Profile() {
  return (
    <Frame>
      <Nav />
      <Container title="프로필">
        <Chat direction="right">
          <p>프로필을 알려주세요.</p>
        </Chat>
        <Person />
        <Chat direction="right">
          <p>자격증은 어떤 게 있나요?</p>
        </Chat>
        <Certificate />
        <Chat direction="right">
          <p>사용할 수 있는 프로그램, 언어 등은 무엇이 있나요?</p>
        </Chat>
        <Skills />
      </Container>
    </Frame>
  );
}
