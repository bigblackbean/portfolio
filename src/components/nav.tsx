"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "@/styles/nav.module.css";
import user from "/public/images/icons/user.svg";
import paper from "/public/images/icons/paper.svg";
import folder from "/public/images/icons/folder.svg";
import ppt from "/public/images/icons/ppt.svg";
import film from "/public/images/icons/film.svg";
import Bar from "./bar";

interface Navigator {
  name: string;
  url: string;
  icon: StaticImageData;
  description: string;
}

const navList: Navigator[] = [
  {
    name: "프로필",
    url: "/profile",
    icon: user,
    description: "간단한 소개 및 정보",
  },
  {
    name: "경력",
    url: "/career",
    icon: paper,
    description: "업무를 진행한 내역",
  },
  {
    name: "작업물",
    url: "/contents",
    icon: folder,
    description: "진행하고 참여했던 프로젝트",
  },
  {
    name: "교육",
    url: "/lesson",
    icon: ppt,
    description: "교육자로 제공한 내용",
  },
  {
    name: "발자취",
    url: "/history",
    icon: film,
    description: "이력에 대한 히스토리",
  },
];

export function NavItem({
  item,
  current,
}: {
  item: Navigator;
  current: string;
}) {
  return (
    <div>
      <Link href={item.url} scroll={false}>
        <div
          className={styles.item}
          style={{ background: current === item.url ? "var(--basic-100)" : "" }}
        >
          <div className={styles.icon}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={item.icon}
              alt={item.name}
            />
          </div>
          <div className={styles.text}>
            <h3 className="h3">{item.name}</h3>
            <p className="body3" style={{ color: "var(--basic-500)" }}>
              {item.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Nav() {
  const current = usePathname();

  return (
    <div className={styles["nav-frame"]}>
      <Bar />
      <ul className={styles.list}>
        {navList.map((item) => (
          <li key={item.name}>
            <NavItem item={item} current={current} />
          </li>
        ))}
      </ul>
    </div>
  );
}
