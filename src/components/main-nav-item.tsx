import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/main.module.css";
import chat from "/public/images/icons/3d-chat.png";

export default function MainNavItem({
  item,
}: {
  item: { name: string; url: string };
}) {
  return (
    <Link style={{ display: "block" }} href={item.url}>
      <div className={styles["nav-item"]}>
        <Image src={chat} alt="chat" />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
