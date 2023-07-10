import ProductCard from "@/components/products/ProductCard";

const fetchProducts = async () => {
  const response = await fetch(`${process.env.BACKEND_API_URL}/api/products`, {
    next: { revalidate: 60 }
  });
  const data = await response.json();
  return data;
};

const Products = async () => {
  const productsBack = await fetchProducts();

  return (
    <section className="flex justify-center flex-wrap gap-8 mt-12">
      {productsBack.payload.map((product) => (
        <ProductCard
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
