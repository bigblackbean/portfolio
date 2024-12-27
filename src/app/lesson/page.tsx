import PageTitle from "@/components/pageTitle";
import Bar from "../../components/bar";
import Accordion from "./components/accordion";

export default function Lesson() {
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
        <PageTitle name="Lesson" />
        <Accordion />
      </div>
    </div>
  );
}
