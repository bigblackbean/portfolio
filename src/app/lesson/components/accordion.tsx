"use client";

import { useState } from "react";
import { lessons } from "../utils";
import AccordionItem from "./accordionItem";

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
    <div style={{ padding: 20 }}>
      <ul>
        {lessons.map((item) => (
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
