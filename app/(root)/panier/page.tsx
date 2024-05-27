import React from "react";
import { Metadata } from "next";
import PanierComponent from "@/components/PanierComponent";

export const metadata: Metadata = {
  title: "Herouville Futsal - Panier",
  description: "Votre panier de produits.",
};

const Panier = () => {
  return <PanierComponent />;
}

export default Panier;