import styles from "@/styles/main.module.css";

export default function MainText({ clicked }: { clicked: boolean }) {
  return (
    <div className={styles["main-text"]}>
      {clicked ? (
        <p>
          UIUX DESIGNER
          <br />
          WEB PUBLISHER
          <br />
          <b className={styles.point}>FE DEVELOPER</b>
        </p>
      ) : (
        <p>
          <b className={styles.point}>대화</b>하고 싶은 동료,
          <br />
          프론트엔드 개발자
          <br />
          <b className={styles.point}>이강희</b>입니다.
          <br />
        </p>
      )}
    </div>
  );
}
