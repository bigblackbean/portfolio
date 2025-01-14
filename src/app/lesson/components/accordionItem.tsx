import Image from "next/image";

import { LessonData } from "../utils";
import Chat from "@/components/chat";
import arrow from "/public/images/icons/back-black.svg";
import styles from "@/styles/lesson.module.css";

export default function AccordionItem({
  content,
  selected,
  selectId,
}: {
  content: LessonData;
  selected: number;
  selectId: (id: number) => void;
}) {
  return (
    <Chat direction="left" accordian>
      <div className={styles["accordian-item"]}>
        <button
          className={styles["accordian-button"]}
          onClick={() => selectId(content.id)}
          type="button"
        >
          <h4 className="body1">{content.name}</h4>
          <div
            className={styles.arrow}
            style={{
              transform:
                content.id === selected ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          >
            <Image src={arrow} alt="arrow" />
          </div>
        </button>
        {content.id === selected && (
          <div className={styles.contents}>
            {content.description.map((item, index) => (
              <div key={index}>
                <p className="body2">{item}</p>
                {index + 1 !== content.description.length && <br />}
              </div>
            ))}
          </div>
        )}
      </div>
    </Chat>
  );
}
