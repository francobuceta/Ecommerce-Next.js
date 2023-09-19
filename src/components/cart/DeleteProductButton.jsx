"use client";
import { deleteProductFromCart } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { deleteRequest } from "@/services/clientFetching";

const DeleteProductButton = ({ productId, userCartId }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = async (productId) => {
    dispatch(deleteProductFromCart(productId));
    await deleteRequest(`/api/cart/${userCartId}/product/${productId}`);
  };

  return (
    <>
      <button
        className="btn bg-custome-lightblack text-white border-none"
        onClick={() => handleDeleteProduct(productId)}
      >
        Eliminar
      </button>
    </>
  );
};

export default DeleteProductButton;
