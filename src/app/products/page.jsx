import ProductCard from "@/components/products/ProductCard";
import { getRequest } from "@/services/serverFetching";

const Products = async () => {
  const productsBack = await getRequest("/api/products");

  //const pagination = () => {};

  return (
    <section className="flex justify-center flex-wrap gap-8 mt-12">
      {productsBack.payload.map((product) => (
        <ProductCard
          key={product._id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}

      {productsBack.info.totalPages > 1 && (
        <div className="join grid grid-cols-2 mt-10">
          <button className="join-item btn btn-outline bg-white">
            Anterior
          </button>
          <button className="join-item btn btn-outline bg-white">
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
