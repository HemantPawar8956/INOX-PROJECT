import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from './Sider';

const Layout = () => {
  let {siderVisible,setSiderVisible}=useContext(globalVar)
  return <div >
        {siderVisible && (
           <Sider/>

          )}
    <Navbar/>

    <Outlet/>
  </div>;
};

export default Layout;
