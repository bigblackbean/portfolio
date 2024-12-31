export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>
        {`
        .container::-webkit-scrollbar {
          width: 4px;
        }
        .container::-webkit-scrollbar-thumb {
          width: 4px;
          border-radius: 2px;
          background: var(--Basic-400);
        }
        .container::-webkit-scrollbar-track {
          background: var(--Basic-50);
        }
        `}
      </style>
      <div
        className="container"
        style={{ height: "calc(100% - 36px)", overflow: "auto" }}
      >
        {children}
      </div>
    </>
  );
}
