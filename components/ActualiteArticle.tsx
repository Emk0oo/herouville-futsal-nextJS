// components/ActualiteArticle.tsx
import Image from 'next/image';
import React from 'react';
import { Article } from '@/utils/articleTest';

interface ActualiteArticleProps {
  article: Article;
}

const ActualiteArticle: React.FC<ActualiteArticleProps> = ({ article }) => {
  const { imageURL, title, title2, title3, date, entete, content, content2 } = article;
  
  return (
    <div id="Article" className="w-full h-full p-4 md:mt-[3%]">
      <div id="headerArticle" className="flex flex-col md:flex-row md:w-2/3 shadow-xl mx-auto">
        <div className="w-full md:w-4/5 md:h-[400px] relative">
          <Image
            src={imageURL}
            alt={title}
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div id="TitreArticle" className="flex flex-col justify-center md:w-1/5 md:ml-4 md:mt-0 mt-4">
          <h1 className="text-3xl font-bold text-bleuNuitHerouville">
            {title}
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
           Publié le {new Date(date).toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>

      <div id="contentArticle" className="flex flex-col mt-4 md:mx-[30%]">
        <p className="mt-4 text-bleuNuitHerouville font-bold">
          {entete}
        </p>
        <p className="mt-4 text-xl font-bold text-bleuNuitHerouville underline decoration-jauneHerouville decoration-4">
          {title2}
        </p>
        <p className="mt-4 font-bold bg-bleuHerouville text-white inline-block">
          {title3}
        </p>
        <div id="paragraphe" className="md:flex gap-10">
          <p className="mt-4">{content}</p>
          <p className="mt-4">{content2}</p>
        </div>
      </div>
    </div>
  );
}

export default ActualiteArticle;
