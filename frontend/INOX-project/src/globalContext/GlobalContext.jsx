import React, { createContext, useState } from "react";
export let globalVar = createContext();
// import jwt_decode from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import UpdateTheatre from './../components/UpdateTheatre';
import axios from "axios";

export const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible, setSiderVisible] = useState(false);
  let [loginPanel, setLoginPanel] = useState(false);
  let [moviePanel, setMoviePanel] = useState(false);
  let [addthatrePanel, setAddTheatrePanel] = useState(false);
  let [location, setLocation] = useState(true);
  let [signupPanel, setSignupPanel] = useState(false);
  let [userLocation, setUserLocation] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [updateNotify, setupdateNotify] = useState(false);
  let [UpdateTheater,setUpdateTheater] = useState(false);
  let [updateData,setUpdateData] = useState({
    comp:"",
    data:""
  });
  let [deleteData,setDeleteData] = useState({
    comp:"",
    data:""
  });
  let [updateCount,setUpdateCount] =useState(0); 
  let [deleteCount,setDeleteCount] =useState(0);

  let [theaterId,setTheaterId] = useState(0);
  let auth = localStorage.getItem("auth");
  console.log(auth)
  const decodedToken = auth && jwtDecode(auth);
  console.log(decodedToken);
  let [inoxLoginType, setInoxLoginType] = useState(
    decodedToken?.role || "ADMIN"
  );
  //   const decodedToken = jwt_decode(auth.token);

  let [loginType, setLoginType] = useState("USER");
  console.log(loginType);

  let loginTypes = [
    {
      loginName: "ADMIN",
      loginVal: "ADMIN",
    },
    {
      loginName: "USER",
      loginVal: "USER",
    },
  ];

   let updateTheaterId=(ele)=>{
      setTheaterId(ele.id);
      console.log(ele)
      setUpdateTheater(true)

   }

  return (
    <Provider
      value={{
        siderVisible,
        setSiderVisible,
        loginPanel,
        setLoginPanel,
        signupPanel,
        setSignupPanel,
        moviePanel,
        setMoviePanel,
        location,
        setLocation,
        userLocation,
        setUserLocation,
        loginType,
        setLoginType,
        loginTypes,
        inoxLoginType,
        setInoxLoginType,
        addthatrePanel,
        setAddTheatrePanel,
        isModalOpen,
        setIsModalOpen,
        updateNotify,
        setupdateNotify,
        UpdateTheater,setUpdateTheater,
        theaterId,setTheaterId,
        updateTheaterId,
        updateData,setUpdateData,
        deleteData,setDeleteData,
        updateCount,setUpdateCount,
        deleteCount,setDeleteCount
      }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
