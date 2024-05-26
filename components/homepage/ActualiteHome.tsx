"use client";
import ActualiteCard from "@/components/ActualiteCard";
import Pagination from "@/components/Pagination";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const CARDS_PER_PAGE = 12;

export default function ActualiteHome() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsData, setCardsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:4000/article");
        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await res.json();
        setCardsData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
      <div className="flex justify-center w-full">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-2/3 mx-[15%] ">
            {getPaginatedData().map((card, index) => (
              <ActualiteCard
                key={index}
                imageUrl={card.imageURL}
                title={card.title}
                date={card.date}
                link={`/actualites/${card.id}`}
              />
            ))}
          </div>
        )}
      </div>
      {!isLoading && !error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}