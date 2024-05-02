// ActualiteCard.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  link: string;
}

function Card({ imageUrl, title, date, link }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center text-center">
      <div className="relative w-full h-48 rounded-t-lg">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <a href={link} className="mt-4 inline-block bg-blue-500 text-white rounded-full px-4 py-2">Lire l&apos;article</a>
      </div>
    </div>
  );
}

export default Card;
