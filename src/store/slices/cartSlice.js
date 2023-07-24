import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
