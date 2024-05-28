import React from "react";

const SignIn = () => {
  return (
    <div className="signin-container">
      <form>
        <input type="text" placeholder="שם פרטי" />
        <input type="text" placeholder="שם משפחה" />
        <input type="text" placeholder="שם משתמש" />
        <input type="email" placeholder="אימייל" />
        <input type="password" placeholder="סיסמא" />
        <input type="password" placeholder="אישור סיסמא" />
        <button type="submit">להרשמה</button>
      </form>
    </div>
  );
};

export default SignIn;
