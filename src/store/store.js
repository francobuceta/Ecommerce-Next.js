import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import purchaseSlice from "./slices/purchaseSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    purchase: purchaseSlice
  },
});
