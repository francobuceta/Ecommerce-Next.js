import ProductCard from "@/components/products/ProductCard";
import { getRequest } from "@/services/serverFetching";

const Products = async () => {
  const productsBack = await getRequest("/api/products");
  
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
    </section>
  );
};

export default Products;
