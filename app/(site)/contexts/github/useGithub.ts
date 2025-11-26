"use client";
import { useContext } from "react";
import { GithubContexts } from "./GithubContext";

export function useGithub() {
  const context = useContext(GithubContexts);

  if (context === undefined) {
    throw new Error("useGithub must be used within an GithubProvider");
  }

  return context;
}
