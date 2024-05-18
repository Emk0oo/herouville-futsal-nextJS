"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import imgArticle from "@/public/calendrierCard.png";

const articles = [
  {
    id: 1,
    imageUrl: imgArticle,
    titre: "Lorem ipsum dolor sit amet consectetur",
    titre2: "Lorem ipsum dolor sit amet ",
    titre3: "Tincidunt ornare massa eget ",
    date: "Publié le: 12 avril 2023",
    entete:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus a eveniet, et minus fugiat repellendus laudantium voluptatum nostrum laboriosam, molestiae incidunt hic harum maxime? Voluptatibus qui unde ad? Delectus?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore adipisci magni at corrupti recusandae blanditiis. Reiciendis, hic. Quis, dolore vel. Recusandae beatae quisquam cupiditate, fugiat voluptatem dolore, dolorum exercitationem nemo quasi totam libero sequi magni deleniti? Recusandae sequi quisquam repellat itaque facere minima incidunt illum ea, ad alias pariatur voluptate magni doloribus quos dolores omnis illo sunt repudiandae voluptatem quasi, dolorem aliquid voluptas optio? Qui consectetur iure earum soluta quibusdam odio, vero iste aliquid cum, deserunt, maiores accusantium incidunt quaerat. Vel id illo delectus aperiam commodi.",
     },
  {
    id: 2,
    imageUrl: imgArticle,
    titre: "Lorem ipsum dolor sit amet consectetur",
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
      {/* Ici component article */}
      <div id="Article" className="w-full md:w-1/2 p-4">
        <div id="headerArticle" className="flex flex-col ">
          <Image
            src={article.imageUrl}
            alt={article.titre}
            layout="responsive"
            width={700}
            height={475}
            objectFit="cover"
            className=""
          />
          <h1 className="text-3xl font-bold mt-4 text-bleuNuitHerouville">
            {article.titre}
          </h1>
          <p className="text-xs text-gray-500 mt-1">{article.date}</p>
        </div>
        <div id="contentArticle" className="flex flex-col mt-4">
          <p className="mt-4 text-bleuNuitHerouville font-bold">{article.entete}</p>
          <p className="mt-4 text-xl font-bold text-bleuNuitHerouville underline decoration-jauneHerouville decoration-4">{article.titre2}</p>
          <p className="mt-4 font-bold bg-bleuHerouville text-white inline-block">{article.titre3}</p>
          <p className="mt-4">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ActualiteDetail;
