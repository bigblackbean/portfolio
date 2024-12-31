"use client";

import { createContext } from "react";

export const ModalContext = createContext({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ModalContext.Provider value={{}}>{children}</ModalContext.Provider>;
}
