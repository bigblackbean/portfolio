import Chat from "@/components/chat";
import { historyData } from "../variants";
import styles from "@/styles/history.module.css";

export default function AccordionItem({
  content,
  selected,
  selectId,
}: {
  content: historyData;
  selected: number;
  selectId: (id: number) => void;
}) {
  const thisSelected: boolean = content.id === selected;

  return (
    <Chat direction="left" accordian>
      <div
        className={styles["accordian-item"]}
        style={{ height: thisSelected ? "auto" : "calc(21px + 21px + 40px)" }}
      >
        <div className={styles["accordian-button"]}>
          <h4 className="h4">{content.name}</h4>
          {!thisSelected && (
            <button
              className={styles.open}
              onClick={() => selectId(content.id)}
              type="button"
            >
              <p className="body2">{content.description[0]}</p>
              <div className={styles.more}>
                <p className="body3">더보기</p>
              </div>
            </button>
          )}
        </div>
        {thisSelected && (
          <div className={styles.contents}>
            {content.description.map((item, index) => (
              <div key={index}>
                <p className="body2">{item}</p>
                {index + 1 !== content.description.length && <br />}
              </div>
            ))}
            <button
              className={styles.close}
              onClick={() => selectId(content.id)}
              type="button"
            >
              <p className="body3">줄이기</p>
            </button>
          </div>
        )}
      </div>
    </Chat>
  );
}
