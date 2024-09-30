import React from "react";

import Corousel1 from "./Corousel1";
import Corousel2 from "./Corousel2";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
const Layout = () => {

  return (
    <div>
      <Corousel1 />
      <Corousel2 />
      <LoginPage />
    </div>
  );



}

export default Layout;
