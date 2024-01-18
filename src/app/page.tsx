import Navigation from "./components/Navigation";
import styles from "./page.module.css";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>PORTFOLIO</h2>
        {children}
        <div style={{ width: "100%", position: "fixed", bottom: 0 }}>
          <Navigation />
        </div>
      </div>
    </>
  );
}
