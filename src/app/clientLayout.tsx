"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  // Une seule instance pour toute la durée de vie de l'application.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
