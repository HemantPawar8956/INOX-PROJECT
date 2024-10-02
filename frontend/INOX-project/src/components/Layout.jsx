import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import { Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Booking from "./Booking";
import SignUp from "../pages/SignUp";
// import RegisterPage from "../pages/RegisterPage";

const Layout = () => {
  let { siderVisible, setSiderVisible, loginPanel, setLoginPanel } =
    useContext(globalVar);
  console.log(loginPanel);

  return (
    <div>
     {/*  {siderVisible && <Sider />}
      {loginPanel && <LoginPage />}
      <Navbar />
      <Outlet /> */}
     {/*  <Booking/> */}
     <SignUp/>
    </div>
  );
};

export default Layout;
