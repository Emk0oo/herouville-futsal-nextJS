import ActualitesDashboard from "@/components/dashboard/ActualitesDashboard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herouville Futsal - Dashboard - Actualites",
  description: "Dashboard de l'administration du site.",
};

export default function Actualites() {
  return (
    <ActualitesDashboard />
  )
}