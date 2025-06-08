import styles from "@/styles/main.module.css";
import Image from "next/image";
import couple from "/public/images/main/Main-01.png";

export default function Main() {
  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <h2 className={`${styles.title} walter-turncoat-regular`}>
          <span className={styles.line1}>YOU ARE INVITED TO</span>
          <span className={styles.line2}>OUR WEDDING</span>
        </h2>
        <div className={styles.couple}>
          <Image src={couple} alt="couple" />
        </div>
        <div className={styles.footer}>
          <p className={styles.line1}>2025.09.13 SAT 02:00PM</p>
          <p className={styles.line2}>at. VENUEVIAN WEDDING</p>
        </div>
      </div>
    </div>
  );
}
