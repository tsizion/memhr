import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className=" xsm:mt-24 sm:mt-20 md:mt-20">
        {" "}
        {/* Add margin-top to create space */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
