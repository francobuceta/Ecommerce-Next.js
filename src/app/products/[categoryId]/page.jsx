import ProductsList from "@/components/products/ProductsList";

const ProductsCategories = ({ params }) => {
  const { categoryId } = params;

  return <ProductsList categoryId={categoryId} />;
};

export default ProductsCategories;
