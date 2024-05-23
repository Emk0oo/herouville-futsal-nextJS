// components/GenericTable.tsx
"use client";
import React, { ReactNode } from "react";
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
      <div className="container mx-auto p-4">
        <div id="boutonNouveau" className="flex justify-end">
          <Link
            href={addUrl}
            className=" mb-2 p-2 border rounded-xl bg-green-500"
          >
            <div className="flex items-center gap-2 text-white font-bold">
              <p>Ajouter</p>
              <MdAddCircleOutline size={30} />
            </div>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {columns.map((column) => (
                  <th key={column.key as string} className="py-3 px-6 text-left">
                    {column.header}
                  </th>
                ))}
                <th className="py-3 px-6 text-left">Opération</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="text-center py-3">
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
                      <td key={column.key as string} className="py-3 px-6 text-left">
                        {String(item[column.key])}
                      </td>
                    ))}
                    <td className="py-3 px-6 text-left">
                      <div className="flex ">
                        <Link
                          href={`${editUrl}/${item.id}`}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          <CiEdit size={32} />
                        </Link>
                        <button
                          onClick={() => deleteHandler(item.id)}
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
  );
};

export default GenericTable;
