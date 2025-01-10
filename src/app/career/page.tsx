import { careers } from "./variants";
import IdCard from "./components/IdCard";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";

export default function Career() {
  return (
    <Frame>
      <Nav />
      <Container title="경력">
        <div style={{ padding: 10 }}>
          <ul>
            {careers.map((item) => (
              <li key={item.id} style={{ marginBottom: 10 }}>
                <IdCard data={item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Frame>
  );
}
