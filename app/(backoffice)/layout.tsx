// dashboard/layout.tsx
import React from "react";
import "../globals.css";
import DashboardLayoutComponent from "@/components/dashboard/DashboardLayoutComponent";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
}
