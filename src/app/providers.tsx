"use client";

import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <div className="bg-background">{children}</div>
        <ToastContainer toastClassName="text-md" />
      </SessionProvider>
    </NextUIProvider>
  );
}
