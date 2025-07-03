"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 2000); // 2초 후 자동 사라짐
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          className="animate-fade-in-out"
          style={{
            width: "80vw",
            backgroundColor: "rgba(0,0,0,0.76)",
            color: "var(--basic-0)",
            textAlign: "center",
            padding: "2vw 0",
            borderRadius: "2vw",
            position: "fixed",
            bottom: "16vw",
            left: "10vw",
            fontSize: "var(--fz-14)",
            zIndex: 999,
          }}
        >
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
