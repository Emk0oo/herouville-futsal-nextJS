import React from "react";
import { Metadata } from "next";
import ActualiteDetail from "@/components/homepage/ActualiteDetail";

export const metadata: Metadata = {
  title: "Herouville Futsal - Actualite",
  description: "Consultez les dernières actualités de notre site.",
};

export default function ActualiteById() {
  return (
    <>
    <ActualiteDetail />
    </>
  );
}
