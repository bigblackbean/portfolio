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
    <div style={{ borderRadius: 8, backgroundColor: "var(--Basic-100)" }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "8px 10px",
          border: "1px solid var(--Basic-300)",
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
            borderTop: "6px solid var(--Basic-600)",
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
          {content.description.map((item, index) => (
            <>
              <p
                key={index}
                style={{ fontWeight: 400, fontSize: 14, wordBreak: "keep-all" }}
              >
                {item}
              </p>
              {index + 1 !== content.description.length && <br />}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
