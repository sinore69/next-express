'use client'
import React from "react";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
export default function Provider({children}:{children:React.ReactNode}) {
  const [queryClient]=React.useState(()=>new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
} 