import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <button onClick={() => navigate("/login")}>משתמש קיים</button>
      <button onClick={() => navigate("/signin")}>משתמש חדש</button>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
