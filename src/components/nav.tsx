import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

import user from "@/images/icons/user.svg";
import paper from "@/images/icons/paper.svg";
import folder from "@/images/icons/folder.svg";
import ppt from "@/images/icons/ppt.svg";
import film from "@/images/icons/film.svg";

const navList = [
  { name: "Profile", url: "/profile", image: user },
  { name: "Career", url: "/career", image: paper },
  { name: "Contents", url: "/contents", image: folder },
  { name: "Lesson", url: "/lesson", image: ppt },
  { name: "History", url: "/history", image: film },
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
      <ul style={{ display: "flex", padding: 8 }}>
        {navList.map((item) => (
          <li key={item.name} style={{ width: 64, height: 64 }}>
            <Link href={item.url}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div style={{ width: 32, height: 32 }}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p style={{ fontSize: 12, textAlign: "center", color: "#fff" }}>
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
