// Actualites.js
import Card from "@/components/ActualiteCard";
import ActualiteForm from "@/components/ActualiteForm";
import GenericPage from "@/components/GenericPage";
import Link from "next/link";
import React from "react";

export default function NouveauArticle() {
  const pageTitle = "Actualités";

  return (
    <div>
        <ActualiteForm />
    </div>
  );
}
