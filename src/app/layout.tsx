import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${openSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
