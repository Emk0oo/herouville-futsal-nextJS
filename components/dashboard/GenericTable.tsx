"use client";
import React from "react";
import Link from "next/link";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";

interface GenericTableProps<T> {
  data: T[];
  columns: { header: string; key: keyof T }[];
  deleteHandler: (id: number) => void;
  editUrl: string;
  addUrl: string;
}

const GenericTable = <T extends { id: number }>({
  data,
  columns,
  deleteHandler,
  editUrl,
  addUrl,
}: GenericTableProps<T>) => {
  return (
    <div className="w-full">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-end mb-4">
          <Link
            href={addUrl}
            className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <MdAddCircleOutline size={24} className="mr-2" />
            Ajouter
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                {columns.map((column) => (
                  <th key={column.key as string} className="py-3 px-6 text-left">
                    {column.header}
                  </th>
                ))}
                <th className="py-3 px-6 text-left">Opération</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="text-center py-4">
                    Aucune donnée disponible
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key as string}
                        className="py-3 px-6 text-left"
                      >
                        {String(item[column.key])}
                      </td>
                    ))}
                    <td className="py-3 px-6 text-left">
                      <div className="flex space-x-4">
                        <Link
                          href={`${editUrl}/${item.id}`}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <CiEdit size={24} />
                        </Link>
                        <button
                          onClick={() => deleteHandler(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <CiTrash size={24} />
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
  );
};

export default GenericTable;
