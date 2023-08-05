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
          (elem) => elem.productId === action.payload.productId
        );
      }

      if (!repeatedProduct) {
        productToCartSucceeded();
        const newState = Array.isArray(state) ? [...state, action.payload] : [action.payload];
        return newState;
      } else if (
        repeatedProduct &&
        repeatedProduct.quantity + action.payload.quantity <=
          action.payload.stock
      ) {
        productToCartSucceeded();
        return state.map(product =>
          product.productId === action.payload.productId
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
      } else {
        productToCartFailed();
      }
    }
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
