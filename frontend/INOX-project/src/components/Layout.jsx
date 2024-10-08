import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { globalVar } from "../globalContext/GlobalContext";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Addtheatre from "./Addtheatre";
import SelectLocation from "./SelectLocation";
import SignUp from "../pages/SignUp";
import Addmovie from "./Addmovie";
import Corousel2 from "./Corousel2";
// import RegisterPage from "../pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import Sider from "./Sider";
import UpdateTheatre from "./UpdateTheatre";
import DeleteNotify from "./DeleteNotify";
import UpdateNotify from "./UpdateNotify";

const Layout = () => {
  let {
    siderVisible,
    setSiderVisible,
    loginPanel,
    setLoginPanel,
    location,
    signupPanel,
    setSignupPanel,
    setLocation,
    moviePanel,
    setMoviePanel,
    addthatrePanel,
    setAddTheatrePanel,
    isModalOpen,
    setIsModalOpen,
    updateNotify,
    setupdateNotify,
    UpdateTheater,setUpdateTheater
  } = useContext(globalVar);

  return (
    <div>
      <Toaster />
      {UpdateTheater && <UpdateTheatre/>}
      {/* {<Addtheatre/>} */}
      
      {addthatrePanel && <Addtheatre />}
      {isModalOpen && <DeleteNotify />}
      {updateNotify && <UpdateNotify />}
      {location && <SelectLocation />}
      {siderVisible && <Sider />}
      {moviePanel && <Addmovie />}

      {loginPanel && <LoginPage />}
      {signupPanel && <SignUp />}

      <Navbar />
      <Outlet />
    
     
         
          {/* <Addmovie/> */}
       
    
    </div>
  );
};

export default Layout;
