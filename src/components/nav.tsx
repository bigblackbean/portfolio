"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import user from "@/images/icons/user.svg";
import userGray from "@/images/icons/user-gray.svg";
import paper from "@/images/icons/paper.svg";
import paperGray from "@/images/icons/paper-gray.svg";
import folder from "@/images/icons/folder.svg";
import folderGray from "@/images/icons/folder-gray.svg";
import ppt from "@/images/icons/ppt.svg";
import pptGray from "@/images/icons/ppt-gray.svg";
import film from "@/images/icons/film.svg";
import filmGray from "@/images/icons/film-gray.svg";

interface Navigator {
  name: string;
  url: string;
  icon: StaticImageData;
  defaultIcon: StaticImageData;
}

const navList: Navigator[] = [
  { name: "Profile", url: "/profile", icon: user, defaultIcon: userGray },
  { name: "Career", url: "/career", icon: paper, defaultIcon: paperGray },
  { name: "Contents", url: "/contents", icon: folder, defaultIcon: folderGray },
  { name: "Lesson", url: "/lesson", icon: ppt, defaultIcon: pptGray },
  { name: "History", url: "/history", icon: film, defaultIcon: filmGray },
];

export default function Nav() {
  const current = usePathname();

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
            <Link href={item.url} scroll={false}>
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
                    src={current === item.url ? item.icon : item.defaultIcon}
                    alt={item.name}
                  />
                </div>
                <p
                  className="h5"
                  style={{
                    textAlign: "center",
                    color:
                      current === item.url
                        ? "var(--basic-0)"
                        : "var(--basic-400)",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
