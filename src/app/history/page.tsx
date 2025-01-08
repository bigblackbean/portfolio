import { FunctionComponent } from "react";
import PageTitle from "@/components/page-title";
import Accordion from "./components/accordion";
import Frame from "@/components/frame";
import Container from "@/components/container";
import Nav from "@/components/nav";

const History: FunctionComponent = () => {
  return (
    <Frame>
      <Nav />
      <Container>
        <PageTitle name="발자취" />
        {/* <div style={{ padding: "10px 20px 0 20px" }}>
          <p
            className="body2"
            style={{
              padding: 10,
              borderRadius: 8,
              color: "var(--basic-900)",
              backgroundColor: "var(--basic-100)",
            }}
          >
            제가 다른 분야에 관심을 갖게 된 흐름을 이야기해 보았습니다. 저를
            이해하는데 도움이 되었으면 합니다.
          </p>
        </div>
        <Accordion />
        <div style={{ padding: "0 0 40px 20px" }}>
          <p className="body2" style={{ color: "var(--basic-600)" }}>
            자세한 이야기를 보시려면 클릭해 주세요!
          </p>
        </div> */}
      </Container>
    </Frame>
  );
};
export default History;
