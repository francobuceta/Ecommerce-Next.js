import CategorySelect from "@/components/products/CategorySelect";

const ProductsLayout = ({ children }) => {
  return (
    <>
      <CategorySelect />
      {children}
    </>
  );
};

export default ProductsLayout;
