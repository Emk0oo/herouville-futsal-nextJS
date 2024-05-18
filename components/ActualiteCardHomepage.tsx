// components/ArticleCard.tsx
import React from 'react';
import Image from 'next/image';
import ButtonLink from './ButtonLink';

interface ActualiteCardHomepageProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
  href: string;
  customClass?: string;
}

const ActualiteCardHomepage: React.FC<ActualiteCardHomepageProps> = ({ imageSrc, altText, title, date, href, customClass }) => {
  return (
    <div className={`flex flex-col w-full md:w-1/4 h-auto md:h-1/2 bg-white rounded-2xl shadow-md ${customClass}`}>
      <Image
        src={imageSrc}
        alt={altText}
        className="mx-auto rounded-t-2xl h-auto object-cover"
        width={500}
        height={300}
      />
      <div className="flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-2xl mx-auto font-bold">
          {title}
        </h1>
        <p>Publié le {date}</p>
        <ButtonLink text="Lire l'article" href={href} />
      </div>
    </div>
  );
};

export default ActualiteCardHomepage;
