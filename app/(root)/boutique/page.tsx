import GenericPage from "@/components/GenericPage";
import React from "react";
import { Metadata } from "next";
import BoutiqueHomePage from "@/components/boutique/BoutiqueHomePage";

export const metadata: Metadata = {
  title: "Herouville Futsal - Boutique",
  description: "Consultez les produits de notre boutique.",
};

const Boutique = () => {
  return <BoutiqueHomePage />;
};

export default Boutique;
