import Image from "next/image";
import background from "@/app/images/blackwave.jpg";
import Nav from "./components/nav";

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
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={background}
            alt="background"
          />
        </div>
        <p
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#fff",
            position: "relative",
            zIndex: 1,
          }}
        >
          PORTFOLIO
        </p>
      </div>
      <Nav />
    </div>
  );
}
