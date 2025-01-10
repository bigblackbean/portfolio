import styles from "@/styles/frame.module.css";

export default function Container({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h3
        className={styles.title}
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid var(--basic-200)",
        }}
      >
        {title}
      </h3>
      <div className={styles.scroll}>{children}</div>
    </div>
  );
}
