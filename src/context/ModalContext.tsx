"use client";

import Image from "next/image";
import { createContext, useContext, useState, ReactNode } from "react";
import close from "/public/images/icons/close-white.svg";

interface ModalContextType {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  content: ReactNode | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const unlockScroll = () => {
    document.body.style.overflow = "";
  };

  const openModal = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
    lockScroll();
  };

  const closeModal = () => {
    unlockScroll();
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      {children}
      {isOpen && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100%",
              background: "#00000080",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            onClick={closeModal}
            type="button"
          />
          <div style={{ width: "100%", position: "relative", zIndex: 2 }}>
            <button
              style={{
                width: "8vw",
                height: "8vw",
                position: "absolute",
                top: "4vw",
                right: "4vw",
                zIndex: 100,
                padding: "1vw",
                background: "rgba(0,0,0,0.6)",
              }}
              onClick={closeModal}
              type="button"
            >
              <Image style={{ opacity: 0.8 }} src={close} alt="close" />
            </button>
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
