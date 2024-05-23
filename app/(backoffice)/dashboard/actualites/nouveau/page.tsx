// Actualites.js
import ActualiteForm from "@/components/ActualiteForm";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herouville Futsal - Dashboard - Actualites - Nouveau",
  description: "Dashboard de l'administration du site.",
};

export default function NouveauArticle() {
  return (
    <div>
        <ActualiteForm />
    </div>
  );
}
