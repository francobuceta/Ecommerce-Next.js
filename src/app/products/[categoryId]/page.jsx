const ProductsCategories = ({ params }) => {
  const { categoryId } = params;

  return <h1 className="text-white">Categoría del producto {categoryId}</h1>;
};

export default ProductsCategories;
