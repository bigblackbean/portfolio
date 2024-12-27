export default function PageTitle({ name }: { name: string }) {
  return (
    <h3
      style={{
        margin: "8px 0",
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
      }}
    >
      {name}
    </h3>
  );
}
