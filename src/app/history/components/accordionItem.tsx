import { historyData } from "../utils";

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
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: "1px solid #9d9d9d",
            backgroundColor: "#000",
          }}
        />
        <h4 style={{ fontWeight: 700, fontSize: 14 }}>{content.name}</h4>
      </button>
      {content.id === selected && (
        <div style={{ padding: "0 10px 10px 36px" }}>
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