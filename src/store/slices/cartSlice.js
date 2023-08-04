import { createSlice } from "@reduxjs/toolkit";
import { productToCartSucceeded, productToCartFailed } from "@/utils/Notifications";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let repeatedProduct = state.find(elem => elem.productId === action.payload.productId);
      
      if(!repeatedProduct) {
        state.push(action.payload);
        productToCartSucceeded();
      } else if (repeatedProduct && (repeatedProduct.quantity + action.payload.quantity) <= action.payload.stock) {
        repeatedProduct.quantity += action.payload.quantity;
        productToCartSucceeded();
      } else {
        productToCartFailed();
      }
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
