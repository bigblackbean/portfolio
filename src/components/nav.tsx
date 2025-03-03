"use client";

import { usePathname } from "next/navigation";

import styles from "@/styles/nav.module.css";
import NavItem from "./nav-item";
import Bar from "./bar";

import Aside from "./aside";
import { navList } from "@/variants/menu";

export default function Nav() {
  const current = usePathname();

  return (
    <div className={`${styles["nav-layout"]} scroll`}>
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
      <Aside type="pc" />
    </div>
  );
}
