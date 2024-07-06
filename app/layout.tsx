import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SimpleProfile from "./components/header/simple-profile";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YOUJIN LEE - Frontend Developer",
  description:
    "Youjin Lee, Frontend developer who loves traveling and bibimbap. Be nice to each other and eat Kimchi✌️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50`}>
        <SimpleProfile />
        <main className="container mx-auto px-6 pt-40 bg-white border-x border-slate-100">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
