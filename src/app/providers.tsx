"use client";

import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="bg-background dark">{children}</div>
    </NextUIProvider>
  );
}
