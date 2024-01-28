"use client";

import { MobileMenuContextProvider } from "@/contexts/MobileMenuStatusContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MobileMenuContextProvider>{children}</MobileMenuContextProvider>;
}
