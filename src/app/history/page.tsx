import { FunctionComponent } from "react";
import Bar from "../../components/bar";
import PageTitle from "@/components/pageTitle";
import Accordion from "./components/accordion";

const History: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "80%",
        background: "#f2f2f2",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Bar />
      <div>
        <PageTitle name="History" />
        <Accordion />
      </div>
    </div>
  );
};
export default History;
