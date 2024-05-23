// dashboard/layout.tsx
import React from "react";
import "../globals.css";
import DashboardLayoutComponent from "@/components/dashboard/DashboardLayoutComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herouville Futsal - Dashboard",
  description: "Dashboard de l'application Herouville Futsal.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}
