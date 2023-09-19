import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { setLocalStorage, clearLocalStorage } from "@/utils/LocalStorageFunctions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  userCart: {},
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInStore: (state, action) => {
      let newState;
      const userData = jwt_decode(action.payload);
      setLocalStorage("auth", action.payload);

      return (newState = {
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        email: userData.user.email,
        role: userData.user.role,
        userCart: userData.user.cart, 
        token: action.payload,
      });
    },
    logOutUser: (state, action) => {
      let newState;
      clearLocalStorage("auth");

      return (newState = {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        userCart: {}, 
        token: "",
      });
    },
  },
});

export const { setUserInStore, logOutUser } = userSlice.actions;
export default userSlice.reducer;
