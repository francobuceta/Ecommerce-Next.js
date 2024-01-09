import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setPurchaseData: (state, action) => {
      const newState = action.payload;
      return newState;
    },
  },
});

export const { setPurchaseData} = purchaseSlice.actions;
export default purchaseSlice.reducer;
