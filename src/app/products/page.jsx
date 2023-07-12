"use client";
import { useState, useEffect } from "react";
import { getRequest } from "@/services/clientFetching";
import ProductCard from "@/components/products/ProductCard";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const fetchData = async (page) => {
    try {
      const response = await getRequest(`/api/products?page=${page}`);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    window.scrollTo({top:0, behavior:"smooth"});
  }, [currentPage]);

  return (
    <section className="flex justify-center flex-wrap gap-8 mt-12">
      {products ? (
        products.payload.map((product) => (
          <ProductCard
            key={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <div className="text-white">Cargando..</div>
      )}

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
    </section>
  );
};

export default Products;
