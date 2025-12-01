"use client";
import { createContext } from "react";

export const GithubContexts = createContext<string>(
  "https://github.com/KerishT"
);

export function GithubProvider({ children }: { children: React.ReactNode }) {
  return (
    <GithubContexts.Provider value={"https://github.com/KerishT"}>
      {children}
    </GithubContexts.Provider>
  );
}
