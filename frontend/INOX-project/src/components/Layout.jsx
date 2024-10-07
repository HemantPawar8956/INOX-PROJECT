import React, { useContext } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import Sider from "./Sider";

import { Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Addtheatre from "./Addtheatre";
import SelectLocation from "./SelectLocation";
import Addmovie from './Addmovie';


const Layout = () => {
  let {
    siderVisible,
    setSiderVisible,
    loginPanel,
    setLoginPanel,
    location,
    setLocation,moviePanel, setMoviePanel
  } = useContext(globalVar);
  console.log(loginPanel);

  return (
    <div>
      {siderVisible && <Sider />}
      {location && <SelectLocation />}
     {moviePanel && <Addmovie/>} 
      {/* {location && <SelectLocation/>} */}
      {loginPanel && <LoginPage />}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
