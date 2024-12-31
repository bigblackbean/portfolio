export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        borderRadius: 16,
        background: "var(--Basic-50)",
        position: "fixed",
        top: "50%",
        left: "50%",
        zIndex: 20,
        transform: "translate(-50%, -50%)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
