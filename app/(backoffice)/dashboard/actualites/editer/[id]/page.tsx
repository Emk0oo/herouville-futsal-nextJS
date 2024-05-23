import React from "react";
import { Metadata } from "next";
import ActualiteEditDashboard from "@/components/dashboard/ActualiteEditDashboard";

export const metadata: Metadata = {
  title: "Herouville Futsal - Dashboard - Actualites - Editer",
  description: "Dashboard de l'administration du site.",
};

export default function Page() {
  return (
    <div>
      <ActualiteEditDashboard />
    </div>
  );
}

