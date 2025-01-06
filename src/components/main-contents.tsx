import Image from "next/image";
import styles from "@/styles/main.module.css";
import papercup from "@/images/papercup.png";
import MainNav from "./main-nav";

export default function MainContents({
  clicked,
  clickCup,
}: {
  clicked: boolean;
  clickCup: () => void;
}) {
  return (
    <>
      {clicked ? (
        <>
          <p className={styles["main-comment"]}>궁금한 내용을 선택해 주세요!</p>
          <MainNav />
        </>
      ) : (
        <button
          style={{ display: "block", width: "auto" }}
          onClick={clickCup}
          type="button"
        >
          <div className={styles["main-balloon"]}>
            <span className={styles.arrow} />
            가볍게 한잔하며 대화 나눠보실래요?
          </div>
          <div
            style={{
              width: "15%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <p className={styles["cup-text"]}>click me!</p>
            <Image src={papercup} alt="paper cup" />
          </div>
        </button>
      )}
    </>
  );
}
