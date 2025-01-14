import { careers } from "./variants";
import IdCard from "./components/IdCard";
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
      </Container>
    </Frame>
  );
}
