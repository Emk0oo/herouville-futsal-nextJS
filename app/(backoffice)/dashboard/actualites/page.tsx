"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";


interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
}

export default function Actualites() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:4000/article");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data: Article[] = await response.json();
        setArticles(data);
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

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/article/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete article");
      }
      setArticles(articles.filter((article) => article.id !== id));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="container mx-auto p-4">
          <div id="boutonNouveau" className="flex justify-end">
            <Link
              href="actualites/nouveau"
              className=" mb-2 p-2 border rounded-xl bg-green-500"
            >
              <div className="flex items-center gap-2 text-white font-bold">
                <p>Ajouter un article</p>
                <MdAddCircleOutline size={30} />
              </div>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead>
                <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">
                    Titre de l&apos;article
                  </th>
                  <th className="py-3 px-6 text-left">Auteur</th>
                  <th className="py-3 px-6 text-left">Date de publication</th>
                  <th className="py-3 px-6 text-left">Opération</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="text-center py-3">
                      Loading...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={4} className="text-center py-3 text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : (
                  articles.map((article) => (
                    <tr
                      key={article.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left">{article.title}</td>
                      <td className="py-3 px-6 text-left">{article.author}</td>
                      <td className="py-3 px-6 text-left">
                        {new Date(article.date).toLocaleDateString("fr-FR")}
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex ">
                          <Link
                            href={`actualites/editer/${article.id}`}
                            className="text-blue-500 hover:text-blue-700 mr-2"
                          >
                            <CiEdit size={32} />
                          </Link>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <CiTrash size={32} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
