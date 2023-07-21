"use client";
import { useState, useEffect } from "react";
import { getRequest } from "@/services/clientFetching";
import ProductCard from "@/components/products/ProductCard";
import PaginationButton from "./PaginationButton";

const ProductsList = ({ categoryId }) => {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
    try {
      if (categoryId === "all") {
        const allProducts = await getRequest(`/api/products?page=${page}`);
        setProducts(allProducts);
      } else {
        const categoryProducts = await getRequest(
          `/api/products?category=${categoryId}&page=${page}`
        );
        setProducts(categoryProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="mt-12">
      <div className="flex justify-center flex-wrap gap-8">
        {products ? (
          products.payload.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              category={product.category}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <div className="text-white">Cargando..</div>
        )}
      </div>

      <PaginationButton
        products={products}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default ProductsList;
