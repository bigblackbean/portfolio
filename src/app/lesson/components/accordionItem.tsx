import { LessonData } from "../utils";

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
    <div style={{ borderRadius: 8, backgroundColor: "#e9e9e9" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "8px 10px",
          border: "1px solid #c4c4c4",
          borderRadius: "inherit",
          textAlign: "left",
        }}
        onClick={() => selectId(content.id)}
        type="button"
      >
        <h4 style={{ fontWeight: 700, fontSize: 14 }}>{content.name}</h4>
        <span
          style={{
            display: "block",
            borderTop: "6px solid #555",
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            transform: content.id === selected ? "rotate(180deg)" : "",
          }}
        />
      </button>
      {content.id === selected && (
        <div
          style={{
            padding: 10,
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit",
          }}
        >
          <p style={{ fontWeight: 400, fontSize: 14, wordBreak: "keep-all" }}>
            {content.description}
          </p>
        </div>
      )}
    </div>
  );
}
