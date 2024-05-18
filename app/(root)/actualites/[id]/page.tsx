"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import imgArticle from "@/public/calendrierCard.png";

const articles = [
  {
    id: 1,
    imageUrl: imgArticle,
    titre: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    titre2: "Lorem ipsum dolor sit amet ",
    titre3: "Tincidunt ornare massa eget ",
    date: "Publié le: 12 avril 2023",
    entete:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. ",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore adipisci magni at corrupti recusandae blanditiis. Reiciendis, hic. Quis, dolore vel. Recusandae beatae quisquam cupiditate, fugiat voluptatem dolore, dolorum exercitationem nemo quasi totam libero sequi magni deleniti? Recusandae sequi quisquam repellat itaque facere minima incidunt illum ea, ad alias pariatur voluptate magni doloribus quos dolores omnis illo sunt repudiandae voluptatem quasi, dolorem aliquid voluptas optio? Qui consectetur iure earum soluta quibusdam odio, vero iste aliquid cum, deserunt, maiores accusantium incidunt quaerat. Vel id illo delectus aperiam commodi.",
    content2:
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
    <>
      <div
        id="Article"
        className="w-full h-full p-4 md:mt-[3%]"
      >
        <div
          id="headerArticle"
          className="flex flex-col md:flex-row md:w-2/3 shadow-xl mx-auto"
        >
          <div className="w-full md:w-4/5 md:h-[400px] relative">
            <Image
              src={article.imageUrl}
              alt={article.titre}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div
            id="Titre article"
            className="flex flex-col justify-center md:w-1/5 md:ml-4 md:mt-0 mt-4 "
          >
            <h1 className="text-3xl font-bold text-bleuNuitHerouville">
              {article.titre}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              {article.date}
            </p>
          </div>
        </div>

        <div id="contentArticle" className="flex flex-col mt-4 md:mx-[30%]">
          <p className="mt-4 text-bleuNuitHerouville font-bold ">
            {article.entete}
          </p>
          <p className="mt-4 text-xl font-bold text-bleuNuitHerouville underline decoration-jauneHerouville decoration-4">
            {article.titre2}
          </p>
          <p className="mt-4 font-bold bg-bleuHerouville text-white inline-block">
            {article.titre3}
          </p>
          <div id="paragraphe" className="md:flex gap-10">
            <p className="mt-4">{article.content}</p>
            <p className="mt-4">{article.content2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActualiteDetail;
