import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className=" ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
