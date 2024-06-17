import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    personalID: "",
    postalCode: "",
    fullAddress: {
      country: "",
      city: "",
      address: "",
      message: "",
    },
  },
  checkValidation: {
    confirmEmail: "",
    emailError: "",
    passwordError: "",
    confirmPassword: "",
  },
  isAuthenticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setFirstName: (state, action) => {
      state.loggedInUser.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.loggedInUser.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.loggedInUser.email = action.payload;
    },
    setPassword: (state, action) => {
      state.loggedInUser.password = action.payload;
    },
    setBirthdate: (state, action) => {
      state.loggedInUser.birthdate = action.payload;
    },
    setPersonalID: (state, action) => {
      state.loggedInUser.personalID = action.payload;
    },
    setPostalCode: (state, action) => {
      state.loggedInUser.postalCode = action.payload;
    },
    setConfirmEmail: (state, action) => {
      state.checkValidation.confirmEmail = action.payload;
    },
    setEmailError: (state, action) => {
      state.checkValidation.emailError = action.payload;
    },
    setPasswordError: (state, action) => {
      state.checkValidation.passwordError = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.checkValidation.confirmPassword = action.payload;
    },
    setCountry: (state, action) => {
      state.initialState.fullAddress.country = action.payload;
    },
    setCity: (state, action) => {
      state.initialState.fullAddress.city = action.payload;
    },
    setAddress: (state, action) => {
      state.initialState.fullAddress.address = action.payload;
    },
    setMessage: (state, action) => {
      state.initialState.fullAddress.message = action.payload;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.loggedInUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthdate: "",
        personalID: "",
        postalCode: "",
      };
      state.isAuthenticated = false;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setBirthdate,
  setPersonalID,
  setPostalCode,
  setConfirmEmail,
  setEmailError,
  setPasswordError,
  setConfirmPassword,
  setCountry,
  setCity,
  setAddress,
  setMessage,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
