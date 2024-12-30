import { Career } from "../utils";

export default function IdCard({ data }: { data: Career }) {
  return (
    <div
      style={{
        padding: 20,
        border: "1px solid var(--Basic-200)",
        borderRadius: 16,
        backgroundColor: "var(--Basic-0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div>
          <h3 className="h3" style={{ color: data.color }}>
            {data.encompany}
          </h3>
          <p
            style={{ fontSize: 12, fontWeight: 400, color: "var(--Basic-900)" }}
          >
            {data.field}
          </p>
        </div>
        <p className="body1">{data.company}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 88,
        }}
      >
        <h4 className="h4">{data.position}</h4>
        <p className="body2">{data.role}</p>
      </div>
    </div>
  );
}
