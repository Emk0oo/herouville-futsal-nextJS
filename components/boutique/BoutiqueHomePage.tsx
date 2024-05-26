import React from "react";
import ProduitHomePageCard from "./ProduitHomePageCard";



const BoutiqueHomePage = () => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div
          id="boutiqueContent"
          className="w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-2 mt-2 "
        >
          <ProduitHomePageCard
            imageURL="/actu1.png"
            title="Produit 1"
            description="Description du produit 1"
            price={100}
          />
        </div>
      </div>
    </>
  );
};

export default BoutiqueHomePage;
