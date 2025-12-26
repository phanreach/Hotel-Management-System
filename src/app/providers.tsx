"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, ReactNode } from "react";
import {ToastProvider} from "@heroui/toast";

export default function Providers({ children }: { children: ReactNode }) {
  // We use useState to ensure the QueryClient is only created once 
  // and stays stable across re-renders.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider placement="top-center"/>
      {children}
    </QueryClientProvider>
  );
}