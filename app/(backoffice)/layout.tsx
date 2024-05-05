// dashboard/layout.tsx
import React from "react";
import "../globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} font-sans  `}>
        {children}
      </body>
    </html>
  );
}
