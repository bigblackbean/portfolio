import Link from "next/link";
import { FunctionComponent } from "react";

const navList = [
  { name: "profile", url: "/profile" },
  { name: "career", url: "/career" },
  { name: "contents", url: "/contents" },
  { name: "service", url: "/service" },
  { name: "history", url: "/history" },
];

const Nav: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "fixed",
        bottom: 10,
        zIndex: 10,
      }}
    >
      <ul style={{ display: "flex" }}>
        {navList.map((item) => (
          <li key={item.name} style={{ width: 64, height: 64 }}>
            <Link href={item.url}>
              <div
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  border: "1px solid #ccc",
                }}
              >
                <p style={{ textAlign: "center", color: "#fff" }}>
                  {item.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
