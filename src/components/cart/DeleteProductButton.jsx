"use client"
import { deleteProductFromCart } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";

const DeleteProductButton = ({ productId }) => {

    const dispatch = useDispatch();

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProductFromCart(productId));
    }

  return (
    <>
        <button className="btn bg-custome-lightblack text-white"
            onClick={() => handleDeleteProduct(productId)}>
            Eliminar
        </button>
    </>
  )
}

export default DeleteProductButton;
