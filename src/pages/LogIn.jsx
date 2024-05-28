import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  loginSuccess,
  loginFailure,
} from "../store/userSlice";

const LogIn = () => {
  const { email, password } = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="סיסמא"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">כניסה</button>
      </form>
    </div>
  );
};

export default LogIn;
