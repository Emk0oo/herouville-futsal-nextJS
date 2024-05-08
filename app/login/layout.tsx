// dashboard/layout.tsx
import React from "react";
import "../globals.css";
import { Montserrat } from "next/font/google";
import ConnectionCard from "@/components/ConnectionCard";

import Modal from "@/components/Modal";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} flex font-sans w-full h-screen bg-slate-200 items-center justify-center`}>
        <ConnectionCard />
        {children}
      </body>
    </html>
  );
}
