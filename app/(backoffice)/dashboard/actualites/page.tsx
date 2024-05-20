// Actualites.js
import Card from "@/components/ActualiteCard";
import GenericPage from "@/components/GenericPage";
import Link from "next/link";
import React from "react";

export default function Actualites() {
  const pageTitle = "Actualités";

  return (
    <div><Link href="actualites/nouveau">Nouvel Article</Link></div>
  );
}
