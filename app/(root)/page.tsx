import Home from "@/components/homepage/Home";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herouville Futsal - Accueil",
  description: "Consultez les dernières actualités de notre site.",
};

export default function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
