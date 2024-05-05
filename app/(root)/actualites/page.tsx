// Actualites.js
import Card from "@/components/ActualiteCard";
import GenericPage from "@/components/GenericPage";
import React from "react";

export default function Actualites() {
  const pageTitle = "Actualités";

  return (
    <GenericPage title={pageTitle}>
      <div className="flex justify-center relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
          <Card
            imageUrl="/path_to_image1.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 12 avril 2023"
            link="#"
          />
          <Card
            imageUrl="/path_to_image2.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 10 avril 2023"
            link="#"
          />
          <Card
            imageUrl="/path_to_image3.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 8 avril 2023"
            link="#"
          />

          <Card
            imageUrl="/path_to_image1.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 12 avril 2023"
            link="#"
          />
          <Card
            imageUrl="/path_to_image2.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 10 avril 2023"
            link="#"
          />
          <Card
            imageUrl="/path_to_image3.jpg"
            title="Lorem ipsum dolor sit amet consectetur"
            date="Publié le: 8 avril 2023"
            link="#"
          />

          {/* Ajoutez plus de cartes si nécessaire */}
        </div>
      </div>
    </GenericPage>
  );
}
