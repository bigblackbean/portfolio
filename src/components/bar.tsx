import Link from "next/link";

import styles from "@/styles/nav.module.css";

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles["bar-container"]}>
        <Link href="/">
          <span className={styles.close} />
        </Link>
      </div>
    </div>
  );
}
