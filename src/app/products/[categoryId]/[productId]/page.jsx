const ProductDetail = ({ params }) => {
  const { productId } = params;

  return <h1 className="text-white">Detalle del producto {productId}</h1>;
};

export default ProductDetail;
