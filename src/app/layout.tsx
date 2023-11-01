import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";

const openSans = Open_Sans({
  weight: ["300", "400", "600"],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
