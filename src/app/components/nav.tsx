import { FunctionComponent } from "react";

const navList = [
  { name: "profile" },
  { name: "career" },
  { name: "contents" },
  { name: "service" },
  { name: "history" },
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
      }}
    >
      <ul style={{ display: "flex" }}>
        {navList.map((item) => (
          <li
            key={item.name}
            style={{ width: 64, height: 64, border: "1px solid #ccc" }}
          >
            <p style={{ textAlign: "center", color: "#fff" }}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
