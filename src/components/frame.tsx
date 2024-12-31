export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>
        {`
          .frame {
            animation: show 0.3s forwards;
          }
          @keyframes show {
            0% {
              opacity: 0;
              transform: translate(-50%, -40%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
        `}
      </style>
      <div
        className="frame"
        style={{
          width: "var(--frame-width)",
          maxWidth: 640,
          height: "80vh",
          border: "1px solid var(--Basic-600)",
          borderRadius: 16,
          background: "var(--Basic-50)",
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: 20,
          transform: "translate(-50%, -50%)",
          overflow: "hidden",
          opacity: 0,
          boxShadow: "0 8px 24px #00000080",
        }}
      >
        {children}
      </div>
    </>
  );
}
