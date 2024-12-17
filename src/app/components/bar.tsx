import Link from "next/link";
import { FunctionComponent } from "react";

const Bar: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 16px",
        backgroundColor: "#ccc",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        border: "inherit",
        borderBottom: 0,
      }}
    >
      <Link href="/home">
        <span
          style={{
            display: "block",
            width: 16,
            height: 16,
            border: "1px solid #D45648",
            borderRadius: "50%",
            backgroundColor: "#F26053",
          }}
        />
      </Link>
    </div>
  );
};

export default Bar;
