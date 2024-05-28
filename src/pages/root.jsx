import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="main">
      <header>
        <div className="header-container">
          <h2 className="logo">BAedu</h2>
        </div>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;
