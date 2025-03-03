import { careers } from "./variants";
import IdCard from "./components/id-card";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";
import Chat from "@/components/chat";

export default function Career() {
  return (
    <Frame>
      <Nav />
      <Container title="경력">
        <Chat direction="right">
          <p>어떤 회사에서 근무했었나요?</p>
        </Chat>
        <Chat direction="left" profile>
          <p>제가 근무했던 회사를 최근 순으로 말씀드릴게요.</p>
          <br />
          <div>
            <ul>
              {careers.map((item) => (
                <li key={item.id} style={{ marginBottom: 10 }}>
                  <IdCard data={item} />
                </li>
              ))}
            </ul>
          </div>
        </Chat>
        <Chat direction="left">
          <p>프론트엔드 개발자 경력 3년</p>
          <p>웹퍼블리셔 경력 4년</p>
          <p>디자이너 경력 6년</p>
          <p>입니다.</p>
        </Chat>
      </Container>
    </Frame>
  );
}
