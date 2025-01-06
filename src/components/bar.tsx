import Link from "next/link";

export default function Bar() {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 16px",
        backgroundColor: "var(--basic-800)",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        border: "inherit",
        borderBottom: 0,
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <Link href="/">
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
        {/* <span
          style={{
            display: "block",
            width: 16,
            height: 16,
            border: "1px solid #0DA821",
            borderRadius: "50%",
            backgroundColor: "#29C740",
          }}
        /> */}
      </div>
    </div>
  );
}
