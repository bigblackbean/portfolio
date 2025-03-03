import styles from "@/styles/main.module.css";
import MainNavItem from "./main-nav-item";
import { navList } from "@/variants/menu";

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
