import React from "react";

const Pagination = ({
  currentPage,
  totalMovies,
  onPageChange,
  handleNextPage,
  handlePreviousPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalMovies / 10);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const maxVisiblePages = 10;

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage;
    let endPage;

    if (currentPage <= halfMaxVisiblePages + 2) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage >= totalPages - halfMaxVisiblePages - 1) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMaxVisiblePages;
      endPage = startPage + maxVisiblePages - 1;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 hover:text-slate-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <i className="fa-regular fa-chevron-left" />
            </button>

            {visiblePages[0] > 2 && (
              <button
                onClick={() => onPageChange(1)}
                className={`relative z-10 inline-flex items-center text-gray-400 px-3 py-1 text-sm font-light hover:text-slate-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                1
              </button>
            )}

            {visiblePages[0] > 3 && (
              <span
                key={`ellipsis-start`}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400"
              >
                ...
              </span>
            )}

            {visiblePages.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                aria-current="page"
                className={`relative z-10 inline-flex items-center ${
                  currentPage === pageNumber
                    ? "bg-white rounded-lg shadow-sm text-slate-600"
                    : "text-gray-400"
                } px-3 py-1 text-sm font-light hover:text-slate-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {pageNumber}
              </button>
            ))}

            {visiblePages[visiblePages.length - 1] < totalPages - 2 && (
              <span
                key={`ellipsis-end`}
                className="relative inline-flex items-center px-4 py-2 text-gray-400 font-semibold"
              >
                ...
              </span>
            )}

            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <button
                onClick={() => onPageChange(totalPages)}
                className={`relative z-10 inline-flex items-center text-gray-400 px-3 py-1 text-sm font-light hover:text-slate-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center  px-2 py-2 text-gray-400 hover:text-slate-600 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <i className="fa-regular fa-chevron-right" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
