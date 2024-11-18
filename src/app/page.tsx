import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "#000",
        }}
      >
        <p style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
          PORTFOLIO
        </p>
      </div>
    </div>
  );
}
