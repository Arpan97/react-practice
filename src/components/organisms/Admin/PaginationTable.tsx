import React, { useState, useMemo } from "react";

interface PaginationTableProps<T> {
  data?: T[];
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
  children: React.ReactElement<{ data: T[] }>;
}

const PaginationTable = <T extends object>({
  data = [],
  itemsPerPage,
  onPageChange,
  children,
}: PaginationTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Slice data for current page
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  // Generate smart pagination buttons
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div>
      {React.cloneElement(children, { data: paginatedData })}
      <div className="flex justify-end items-center gap-2 mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {"<"}
        </button>
        {getPageNumbers().map((page, idx) =>
          typeof page === "string" ? (
            <span key={idx} className="px-2">
              {page}
            </span>
          ) : (
            <button
              key={page}
              className={`px-3 py-1 border rounded ${
                currentPage === page ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
