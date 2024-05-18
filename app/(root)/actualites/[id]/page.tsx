// app/(root)/actualites/[id]/page.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ActualiteArticle from "@/components/ActualiteArticle";
import { articles } from "@/utils/articleTest";

const ActualiteDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extraire l'ID de l'URL
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <p>Article non trouvé</p>;
  }
  return <ActualiteArticle article={article} />;
};

export default ActualiteDetail;
