// ActualiteCard.tsx
import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

interface ActualiteCardProps {
  imageUrl: string;
  title: string;
  date: string;
  link: string;
}

function ActualiteCard({ imageUrl, title, date, link }: ActualiteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center text-center w-5/6 h-full justify-center mx-auto">
      <div className="relative w-full h-48 rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
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
