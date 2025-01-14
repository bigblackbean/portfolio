import styles from "@/styles/main.module.css";
import MainNavItem from "./main-nav-item";

const navList: { name: string; url: string }[] = [
  { name: "프로필", url: "/profile" },
  { name: "경력", url: "/career" },
  { name: "작업물", url: "/contents" },
  { name: "교육", url: "/lesson" },
  { name: "발자취", url: "/history" },
];

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
