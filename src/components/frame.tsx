import styles from "@/styles/frame.module.css";

export default function Frame({ children }: { children: React.ReactNode }) {
  return <div className={styles.frame}>{children}</div>;
}
