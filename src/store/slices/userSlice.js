import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInStore: (state, action) => {
      let newState;
      const userData = jwt_decode(action.payload);

      return (newState = {
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        email: userData.user.email,
        role: userData.user.role,
        token: action.payload,
      });
    },
    logOutUser: (state, action) => {
      let newState;

      return (newState = {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        token: "",
      });
    },
  },
});

export const { setUserInStore, logOutUser } = userSlice.actions;
export default userSlice.reducer;
