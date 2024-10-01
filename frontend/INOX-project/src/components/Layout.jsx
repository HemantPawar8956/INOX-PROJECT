import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import { Outlet } from "react-router-dom";

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
