import { createSlice } from "@reduxjs/toolkit";
import {
  successNotification,
  errorNotification,
} from "@/utils/Notifications";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let repeatedProduct;

      if (state.length > 0) {
        repeatedProduct = state.find((elem) => elem._id === action.payload._id);
      }

      if (!repeatedProduct) {
        successNotification("Producto agregado con éxito");
        const newState = Array.isArray(state)
          ? [...state, action.payload]
          : [action.payload];
        return newState;
      } else if (
        repeatedProduct &&
        repeatedProduct.quantity + action.payload.quantity <=
          action.payload.stock
      ) {
        successNotification("Producto agregado con éxito");
        return state.map((product) =>
          product._id === action.payload._id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
      } else {
        errorNotification("Error: Stock insuficiente");
      }
    },

    deleteProductFromCart: (state, action) => {
      return state.filter((product) => {
        return product._id !== action.payload;
      });
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
