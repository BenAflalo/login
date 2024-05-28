import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: { email: "", password: "" },
  isAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setEmail: (state, action) => {
      state.loggedInUser.email = action.payload;
    },
    setPassword: (state, action) => {
      state.loggedInUser.password = action.payload;
    },
    logout: (state) => {
      state.loggedInUser = { email: "", password: "" };
      state.isAuthenticated = false;
    },
  },
});

export const { setEmail, setPassword, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
