"use client";
import React, { useEffect } from "react";
import { AuthProvider } from "./context-provider/auth-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { ToasterProvider } from "@/components/common/sonner";
import { AlertProvider } from "@solarverse/ui";

const queryClient = new QueryClient();
export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
      <ToasterProvider />
      <AlertProvider />
    </QueryClientProvider>
  );
}
