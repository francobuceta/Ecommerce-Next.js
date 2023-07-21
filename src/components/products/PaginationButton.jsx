"use client";

const PaginationButton = ({ products, currentPage, setCurrentPage }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (products.info.hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="join grid grid-cols-2 mt-10">
        <button
          className="join-item btn btn-outline bg-white"
          onClick={handlePrevPage}
        >
          Anterior
        </button>
        <button
          className="join-item btn btn-outline bg-white"
          onClick={handleNextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;
