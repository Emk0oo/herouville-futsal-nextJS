// dashboard/ActualitesDashboard.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Article } from "@/types/Article";
import GenericTable from "./GenericTable";

export default function ActualitesDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:4000/article");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data: Article[] = await response.json();

        // Formater les dates ici
        const formattedData = data.map(article => ({
          ...article,
          date: new Date(article.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        }));

        setArticles(formattedData);
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

    fetchArticles();
  }, []);

  const token = localStorage.getItem("token");

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/article/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete article");
      }
      setArticles(articles.filter((article) => article.id !== id));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const columns: { header: string; key: keyof Article }[] = [
    { header: "Titre de l'article", key: "title" },
    { header: "Auteur", key: "author" },
    { header: "Date de publication", key: "date" },
  ];

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <GenericTable
          data={articles}
          columns={columns}
          deleteHandler={handleDelete}
          editUrl="actualites/editer"
          addUrl="actualites/nouveau"
        />
      )}
    </>
  );
}
