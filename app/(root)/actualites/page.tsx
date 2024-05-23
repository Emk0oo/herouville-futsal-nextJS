import React from "react";
import { Metadata } from "next";
import ActualiteHome from "@/components/homepage/ActualiteHome";

export const metadata: Metadata = {
  title: "Herouville Futsal - Actualite",
  description: "Consultez les dernières actualités de notre site.",
};

export default function Actualite() {
  return (
    <>
    <ActualiteHome />
    </>
  );
}
