"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/Product";
import GenericTable from "../GenericTable";

export default function BoutiqueDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
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

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const columns: { header: string; key: keyof Product }[] = [
    { header: "Nom du produit", key: "name" },
    { header: "Description", key: "description" },
    { header: "Prix", key: "price" },
    { header: "Stock", key: "stock" },
  ];

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <GenericTable
          data={products}
          columns={columns}
          deleteHandler={handleDelete}
          editUrl="boutique/editer"
          addUrl="boutique/nouveau"
        />
      )}
    </>
  );
}
