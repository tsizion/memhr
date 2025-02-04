import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className=" sm:mt-3 md:mt-20">
        {" "}
        {/* Add margin-top to create space */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
