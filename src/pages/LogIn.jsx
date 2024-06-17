import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { email, password } = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleForgotPasswordClick = () => {
    navigate("/ForgotPassword");
  };

  const handleEmailValidation = async () => {
    try {
      // change here to get the email from DB
      const response = await fetch("/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        if (!data.exists) {
          // Email does not exist, handle accordingly
        } else {
          // Email exists, handle accordingly
        }
      } else {
        // Handle server error
      }
    } catch (error) {
      console.error("Error validating email:", error);
      // Handle network error
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEmailValidation();
  };

  return (
    <div className="login-container">
      <img src="" alt="Company logo" />
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
        <p>
          Forgot password click{" "}
          <span onClick={handleForgotPasswordClick}>here</span>{" "}
        </p>
        <button type="submit">כניסה</button>
      </form>
    </div>
  );
};

export default LogIn;
