const ProductsCategories = ({ params }) => {
  const { id } = params;

  return <h1 className="text-white">Categoría del producto {id}</h1>;
};

export default ProductsCategories;
