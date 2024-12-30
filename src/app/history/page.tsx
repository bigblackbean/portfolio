import { FunctionComponent } from "react";
import Bar from "../../components/bar";
import PageTitle from "@/components/pageTitle";
import Accordion from "./components/accordion";

const History: FunctionComponent = () => {
  return (
    <div className="modal-layer">
      <Bar />
      <div className="modal-container">
        <PageTitle name="History" />
        <div style={{ padding: "10px 20px 0 20px" }}>
          <p
            className="body2"
            style={{
              padding: 10,
              borderRadius: 8,
              color: "var(--Basic-900)",
              backgroundColor: "var(--Basic-100)",
            }}
          >
            제가 다른 분야에 관심을 갖게 된 흐름을 이야기해 보았습니다. 저를
            이해하는데 도움이 되었으면 합니다.
          </p>
        </div>
        <Accordion />
        <div style={{ padding: "0 0 40px 20px" }}>
          <p className="body2" style={{ color: "var(--Basic-600)" }}>
            자세한 이야기를 보시려면 클릭해 주세요!
          </p>
        </div>
      </div>
    </div>
  );
};
export default History;
