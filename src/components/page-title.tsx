export default function PageTitle({ name }: { name: string }) {
  return (
    <h3
      className="h3"
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid var(--basic-200)",
      }}
    >
      {name}
    </h3>
  );
}
