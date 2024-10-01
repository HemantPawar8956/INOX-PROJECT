import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import { Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";


const Layout = () => {

  let { siderVisible, setSiderVisible ,loginPanel,setLoginPanel} = useContext(globalVar);

  return (
    <div>
      {siderVisible && <Sider />}
      {loginPanel && <LoginPage />} 
      <Navbar />
      {/* <Corousel1 /> */}
      {/* <Corousel2 /> */}

      <Outlet />
    </div>

  );
};

export default Layout;
