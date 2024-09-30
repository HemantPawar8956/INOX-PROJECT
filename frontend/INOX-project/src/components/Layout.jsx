import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import { Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
const Layout = () => {

  let { siderVisible, setSiderVisible } = useContext(globalVar);

  return (
    <div>
      {siderVisible && <Sider />}
      <Navbar />
      {/* <Corousel1 /> */}
      {/* <Corousel2 /> */}
      <LoginPage />
      <Outlet />
    </div>
  );
};

export default Layout;
