import { historyData } from "../variants";

export default function AccordionItem({
  content,
  selected,
  selectId,
}: {
  content: historyData;
  selected: number;
  selectId: (id: number) => void;
}) {
  return (
    <div style={{ borderRadius: 8 }}>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "100%",
          padding: "8px 10px",
          textAlign: "left",
        }}
        onClick={() => selectId(content.id)}
        type="button"
      >
        <span
          style={{
            display: "block",
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "1px solid var(--basic-400)",
            backgroundColor: "var(--basic-900)",
          }}
        />
        <h4 style={{ fontWeight: 700, fontSize: 14 }}>{content.name}</h4>
      </button>
      {content.id === selected && (
        <div style={{ padding: "0 10px 10px 36px" }}>
          {content.description.map((item, index) => (
            <>
              <p key={index} style={{ fontWeight: 400, fontSize: 14 }}>
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
