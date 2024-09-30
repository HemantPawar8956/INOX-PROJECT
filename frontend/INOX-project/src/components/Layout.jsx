import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Layout = () => {
  return <div className="text-red-700" > <LoginPage/> {/* {<RegisterPage/>} */}</div>;

 
};

export default Layout;
