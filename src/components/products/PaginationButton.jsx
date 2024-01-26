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
      <div
        className={`join grid mt-10 ${
          currentPage > 1 && products?.info?.hasNextPage && "grid-cols-2"
        }`}
      >
        {currentPage > 1 && (
          <button
            className={`btn btn-outline bg-white card_text-darkMode ${
              products?.info?.hasNextPage && "join-item"
            }`}
            onClick={handlePrevPage}
          >
            Anterior
          </button>
        )}
        {products?.info?.hasNextPage && (
          <button
            className={`btn btn-outline bg-white card_text-darkMode ${
              currentPage > 1 && "join-item"
            }`}
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationButton;
