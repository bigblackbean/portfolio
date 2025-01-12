"use client";

import { useState } from "react";
import { data } from "../variants";
import AccordionItem from "./accordionItem";
import styles from "@/styles/history.module.css";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectId = (id: number) => {
    if (selectedId === id) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={styles.block}>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            <AccordionItem
              content={item}
              selected={selectedId}
              selectId={selectId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
