// components/DashboardLayoutComponent.tsx
"use client"
import React from "react";
import { Montserrat } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import useAuthCheckDashboard from "@/hooks/useAuthCheckDashboard";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const DashboardLayoutComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAuthCheckDashboard();
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} font-sans`}>
        <Toaster richColors position="top-right" />
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
};

export default DashboardLayoutComponent;
