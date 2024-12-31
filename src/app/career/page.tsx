import { careers } from "./variants";
import Bar from "../../components/bar";
import PageTitle from "@/components/pageTitle";
import IdCard from "./components/IdCard";
import Frame from "@/components/frame";
import Container from "@/components/container";

export default function Career() {
  return (
    <Frame>
      <Bar />
      <Container>
        <PageTitle name="Career" />
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
