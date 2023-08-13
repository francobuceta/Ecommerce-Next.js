import { createSlice } from "@reduxjs/toolkit";
import {
  productToCartSucceeded,
  productToCartFailed,
} from "@/utils/Notifications";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let repeatedProduct;

      if (state.length > 0) {
        repeatedProduct = state.find(
          (elem) => elem._id === action.payload._id
        );
      }

      if (!repeatedProduct) {
        productToCartSucceeded();
        const newState = Array.isArray(state)
          ? [...state, action.payload]
          : [action.payload];
        return newState;
      } else if (
        repeatedProduct &&
        repeatedProduct.quantity + action.payload.quantity <=
          action.payload.stock
      ) {
        productToCartSucceeded();
        return state.map((product) =>
          product._id === action.payload._id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
      } else {
        productToCartFailed();
      }
    },

    deleteProductFromCart: (state, action) => {
      return state.filter(product => {
        product._id !== action.payload
      });
    }
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
