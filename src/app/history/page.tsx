import { FunctionComponent } from "react";
import Bar from "../../components/bar";

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
        <h3>History</h3>
      </div>
    </div>
  );
};
export default History;
