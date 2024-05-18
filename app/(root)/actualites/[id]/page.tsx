// app/(root)/actualites/[id]/page.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const articles = [
  {
    id: 1,
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    content: "Contenu de l'article 1...",
  },
  {
    id: 2,
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    content: "Contenu de l'article 2...",
  },
  // Ajoutez d'autres articles si nécessaire
];

const ActualiteDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extraire l'ID de l'URL
  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <p>Article non trouvé</p>;
  }

  return (
    <div className="flex justify-center">
      <div id="contentArticle" className="w-full md:w-1/2 p-4">
        <Image
          src={article.imageUrl}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
        <p className="text-sm text-gray-500">{article.date}</p>
        <p className="mt-4">{article.content}</p>
      </div>
    </div>
  );
};

export default ActualiteDetail;
