// components/ActualiteArticle.tsx
import React from "react";
import { Article } from "@/utils/articleTest";
import Image from "next/image";

interface ActualiteArticleProps {
  article: Article;
}

const ActualiteArticle: React.FC<ActualiteArticleProps> = ({ article }) => {
  const { imageURL, title, title2, title3, date, entete, content, content2, imageBase64 } = article;
  console.log(article)
  const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

  return (
    <div id="Article" className="w-full h-full p-4 md:mt-[3%]">
      <div
        id="headerArticle"
        className="flex flex-col md:flex-row md:w-2/3 shadow-xl mx-auto divide-y-4 md:divide-x-4 md:divide-y-0 divide-jauneHerouville"
      >
        <div className="w-full md:w-2/3 relative">
        <Image  
            src={imageSrc}
            alt={title}
            layout="responsive"
            width={700} // Set the width and height according to your image aspect ratio
            height={400}
            objectFit="contain"
            className=""
          />
        </div>
        <div
          id="TitreArticle"
          className="flex flex-col justify-center md:w-1/3 md:mt-0 p-4"
        >
          <h1 className="text-3xl font-bold text-bleuNuitHerouville">
            {title}
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Publié le {new Date(date).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>

      <div id="contentArticle" className="flex flex-col mt-4 md:mx-[30%]">
        <p className="mt-4 text-bleuNuitHerouville font-bold">{entete}</p>
        <p className="mt-4 text-xl font-bold text-bleuNuitHerouville underline decoration-jauneHerouville decoration-4">
          {title2}
        </p>
        <p className="mt-4 font-bold bg-bleuHerouville text-white w-fit">
          {title3}
        </p>
        <div id="paragraphe" className="md:flex gap-10">
          <p className="mt-4">{content}</p>
          <p className="mt-4">{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default ActualiteArticle;


