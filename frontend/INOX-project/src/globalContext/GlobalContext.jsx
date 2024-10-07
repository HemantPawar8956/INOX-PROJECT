import React, { createContext, useState } from "react";
export let globalVar = createContext();
// import jwt_decode from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible, setSiderVisible] = useState(false);
  let [loginPanel, setLoginPanel] = useState(false);
  let [moviePanel, setMoviePanel] = useState(false);
  let [location, setLocation] = useState(true);
  let [signupPanel, setSignupPanel]=useState(false);
  let [userLocation, setUserLocation] = useState("");
  let auth = JSON.parse(localStorage.getItem("auth"));
  console.log(auth);
  let [inoxLoginType, setInoxLoginType] = useState("USER");
  //   const decodedToken = jwt_decode(auth.token);
  // const decodedToken = jwtDecode(auth.token);
  // console.log(decodedToken);

  console.log("loginPanel", loginPanel);
  console.log("signupPanel", signupPanel);
  
  let [loginType, setLoginType] = useState(auth?.user?.role || "USER");
  console.log(loginType) 

  let loginTypes = [
    {
      loginName: "Admin",
      loginVal: "ADMIN",
    },
    {
      loginName: "Users",
      loginVal: "USER",
    },
  ];

  return (
    <Provider
      value={{
        siderVisible,
        setSiderVisible,
        loginPanel,
        setLoginPanel,
        signupPanel,
        setSignupPanel,
        moviePanel, setMoviePanel,
        location,
        setLocation,
        userLocation,
        setUserLocation,
        loginType,
        setLoginType,
        loginTypes,
        inoxLoginType, setInoxLoginType
      }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
