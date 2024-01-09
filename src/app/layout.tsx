import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Open_Sans } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "@/app/providers";

const openSans = Open_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mnemo",
  description: "Fullstack application to manage all your reminders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <TRPCReactProvider headers={headers()}>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
