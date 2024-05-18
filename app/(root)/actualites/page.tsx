"use client";
import Card from "@/components/ActualiteCard";
import GenericPage from "@/components/GenericPage";
import Pagination from "@/components/Pagination";
import React, { useState } from "react";

const cardsData = [
  {
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image3.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 8 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image3.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 8 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image3.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 8 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image3.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 8 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image1.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 12 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image2.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 10 avril 2023",
    link: "/actualites/1",
  },
  {
    imageUrl: "/path_to_image3.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "Publié le: 8 avril 2023",
    link: "/actualites/1",
  },
];

const CARDS_PER_PAGE = 12;

export default function Actualites() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(cardsData.length / CARDS_PER_PAGE);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return cardsData.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {getPaginatedData().map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              date={card.date}
              link={card.link}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
