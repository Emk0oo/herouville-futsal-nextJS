// ActualiteCard.tsx
import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

interface ActualiteCardProps {
  imageBase64: string;
  title: string;
  date: string;
  link: string;
}

function ActualiteCard({ imageBase64, title, date, link }: ActualiteCardProps) {
  const imageSrc = `data:image/jpeg;base64,${imageBase64}`;
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center text-center w-5/6 h-full justify-center mx-auto">
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt="Image de l'actualité"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 h-52">
        <p className=" text-bleuNuitHerouville font-bold">{title}</p>
        <p className="text-xs text-gray-500">Publié le {new Date(date).toLocaleDateString('fr-FR')}</p>
        <div className="mt-14">
          <ButtonLink text="Lire l'article" href={link} className="p-6" />
        </div>
      </div>
    </div>
  );
}

export default ActualiteCard;
