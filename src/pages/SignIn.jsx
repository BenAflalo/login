import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Geocode from "react-geocode";
import {
  setEmail,
  setPassword,
  setConfirmEmail,
  setEmailError,
  setPasswordError,
  setConfirmPassword,
  setFirstName,
  setLastName,
  setBirthdate,
  setPersonalID,
  setPostalCode,
  setCountry,
  setCity,
  setAddress,
  setMessage,
} from "../store/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    email,
    password,
    birthdate,
    personalID,
    postalCode,
    fullAddress,
  } = useSelector((state) => state.user.loggedInUser);
  const { confirmEmail, emailError, passwordError, confirmPassword } =
    useSelector((state) => state.user.checkValidation);

  // Geocode.setApiKey("YOUR_GOOGLE_MAPS_API_KEY");

  // Geocode.setLanguage("he");

  const checkAddress = async (originalAddress) => {
    const { address, city, country } = originalAddress;
    const fullAddress = `${address}, ${city}, ${country}`;
    try {
      const response = await Geocode.fromAddress(fullAddress);
      const { results, status } = response;
      if (status === "OK" && results.length > 0) {
        dispatch(setMessage("The address is valid."));
      } else {
        dispatch(setMessage("The address is not valid."));
      }
    } catch (error) {
      console.error("Error checking the address:", error);
      dispatch(setMessage("An error occurred while checking the address."));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      dispatch(setPasswordError("Passwords do not match"));
      return;
    } else {
      dispatch(setPasswordError(""));
    }

    if (email !== confirmEmail) {
      dispatch(setEmailError("Emails do not match"));
      return;
    } else {
      dispatch(setEmailError(""));
    }
    checkAddress(fullAddress);

    const exists = await checkPersonalIDExists(personalID);
    if (exists) {
      // Personal ID exists, handle accordingly
    } else {
      // Personal ID does not exist, handle accordingly
    }
  };

  return (
    <div className="signin-container">
      <p>הרשמה ל...</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="שם פרטי"
          value={firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}
        />
        <input
          type="text"
          placeholder="שם משפחה"
          value={lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}
        />
        <input
          type="number"
          placeholder="ת.ז"
          maxLength={9}
          value={personalID}
          onChange={(e) => dispatch(setPersonalID(e.target.value))}
        />
        <input
          type="date"
          placeholder="תאריך"
          value={birthdate}
          onChange={(e) => dispatch(setBirthdate(e.target.value))}
        />
        <input
          type="text"
          placeholder="מדינה"
          value={fullAddress.country}
          onChange={(e) => dispatch(setCountry(e.target.value))}
        />
        <input
          type="text"
          placeholder="עיר"
          value={fullAddress.city}
          onChange={(e) => dispatch(setCity(e.target.value))}
        />
        <input
          type="text"
          placeholder="כתובת"
          value={fullAddress.address}
          onChange={(e) => dispatch(setAddress(e.target.value))}
        />
        <input
          type="number"
          placeholder="מיקוד"
          maxLength={6}
          value={postalCode}
          onChange={(e) => dispatch(setPostalCode(e.target.value))}
        />
        <input type="file" placeholder="העלאת תמונת ת.ז" accept="image/*" />
        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="email"
          placeholder="אישור אימייל"
          value={confirmEmail}
          onChange={(e) => dispatch(setConfirmEmail(e.target.value))}
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        <input
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <input
          type="password"
          placeholder="אישור סיסמא"
          value={confirmPassword}
          onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
        />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
        <button type="submit">להרשמה</button>
      </form>
      {fullAddress.message && <p>{fullAddress.message}</p>}
    </div>
  );
};

export default SignIn;
