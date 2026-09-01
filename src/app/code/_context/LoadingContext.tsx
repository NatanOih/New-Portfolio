"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
// type Theme = "light" | "dark";

type loadingContextProvderProps = {
  children: React.ReactNode;
};

type loadingContextType = {
  loading: boolean;
  setLoading: (b: boolean) => void;
};

const LoadingContext = createContext<loadingContextType | null>(null);

export default function LoadingContextProvider({
  children,
}: loadingContextProvderProps) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);

  if (context === null) {
    throw new Error("useThem must be used within a ThemContextProvider");
  }

  return context;
}
