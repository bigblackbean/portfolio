export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          height: "100%",
          margin: "0 auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
