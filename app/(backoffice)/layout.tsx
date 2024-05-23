// dashboard/layout.tsx
"use client"
import React from "react";
import "../globals.css";
import { Montserrat } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import useAuthCheckDashboard from "@/hooks/useAuthCheckDashboard";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthCheckDashboard();
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} font-sans  `}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
