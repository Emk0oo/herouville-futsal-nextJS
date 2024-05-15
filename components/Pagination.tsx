import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`p-2 rounded-full ${
          currentPage === index + 1
            ? "underline decoration-jauneHerouville decoration-4 text-bleuNuitHerouville font-bold"
            : "text-bleuNuitHerouville"
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        className={`p-2 w-7 h-7 flex items-center justify-center rounded-full border-2 border-bleuHerouville text-bleuNuitHerouville font-bold`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        className={`p-2 w-7 h-7 flex items-center justify-center rounded-full border-2 border-bleuHerouville text-bleuNuitHerouville font-bold`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
