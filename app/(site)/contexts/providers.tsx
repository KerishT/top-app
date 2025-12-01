"use client";
import { ReactNode } from "react";
import { GithubProvider } from "./github";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <GithubProvider>{children}</GithubProvider>;
}
