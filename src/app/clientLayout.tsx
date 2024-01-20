"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "@/theme";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
