"use client";

import Head from 'next/head';
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ActualiteArticle from "@/components/ActualiteArticle";

const ActualiteDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extraire l'ID de l'URL

  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`http://localhost:4000/article/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await res.json();
        setArticle(data);
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
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!article) {
    return <p>Article non trouvé</p>;
  }

  return (
    <>
      <Head>
        <title>{article.title} - Mon Site</title>
        <meta name="description" content={article.entete} />
        <meta name="keywords" content={`actualités, news, ${article.title}`} />
      </Head>
      <ActualiteArticle article={article} />
    </>
  );
};

export default ActualiteDetail;