import styles from "@/styles/frame.module.css";
import Aside from "./aside";

export default function Container({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3 className={styles.text}>{title}</h3>
        <Aside type="mo" />
      </div>
      <div className={`${styles.scroll} scroll`}>{children}</div>
    </div>
  );
}
