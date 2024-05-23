"use client";

import ArticleForm from "@/components/dashboard/ArticleForm";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const ActualiteEditDashboard = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extraire l'ID de l'URL

  const [initialData, setInitialData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const response = await fetch(`http://localhost:4000/article/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch article");
          }
          const data = await response.json();
          setInitialData(data);
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

      fetchArticle();
    }
  }, [id]);

  const handleSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`http://localhost:4000/article/${id}`, {
        method: "PUT",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to update article");
      }

      console.log("Article mis à jour avec succès!");
      window.location.href = "/dashboard/actualites"; // Utilisez window.location.href pour rediriger
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Éditer l&apos;article</h1>
      <ArticleForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
};

export default ActualiteEditDashboard;
