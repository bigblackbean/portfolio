import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/main.module.css";
import chat from "/public/images/icons/3d-chat.png";

interface NavItem {
  name: string;
  url: string;
}

const navList: NavItem[] = [
  { name: "프로필", url: "/profile" },
  { name: "경력", url: "/career" },
  { name: "작업물", url: "/contents" },
  { name: "교육", url: "/lesson" },
  { name: "발자취", url: "/history" },
];

export function MainNavItem({ item }: { item: NavItem }) {
  return (
    <Link style={{ display: "block" }} href={item.url}>
      <div className={styles["nav-item"]}>
        <Image src={chat} alt="chat" />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}

export default function MainNav() {
  return (
    <div>
      <ul className={styles["nav"]}>
        {navList.map((item) => (
          <li key={item.name} style={{ width: "12%" }}>
            <MainNavItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
