"use client";
import React, { useEffect, useState } from "react";
import ProduitHomePageCard from "./ProduitHomePageCard";

interface Produit {
  id: string;
  name: string;
  description: string;
  imageBase64: string; // Changed from imageURL to imageBase64
  price: number;
}

const BoutiqueHomePage = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch("http://localhost:4000/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProduits(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduits();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div
        id="boutiqueContent"
        className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-6"
      >
        {produits.map((produit) => (
          <ProduitHomePageCard
            key={produit.id}
            id={produit.id}
            title={produit.name}
            description={produit.description}
            imageBase64={produit.imageBase64} // Changed from imageURL to imageBase64
            price={produit.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BoutiqueHomePage;
