import React from 'react';

function Card({ imageUrl, title, date, link }) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center text-center">
      <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <a href={link} className="mt-4 inline-block bg-blue-500 text-white rounded-full px-4 py-2">Lire l&apos;article</a>
      </div>
    </div>
  );
}

export default Card;
