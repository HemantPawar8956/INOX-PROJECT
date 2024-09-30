import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import Corousel1 from "./Corousel1";
import Corousel2 from "./Corousel2";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
const Layout = () => {
  let { siderVisible, setSiderVisible } = useContext(globalVar);

  return (
    <div>
      {siderVisible && <Sider />}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
