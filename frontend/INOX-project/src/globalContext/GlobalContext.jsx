import React, { createContext, useState } from "react";
export let globalVar = createContext();
// import jwt_decode from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

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
  let [selectedCity, setSelectedCity] = useState(null);
  let auth = localStorage.getItem("auth");
  const decodedToken = jwtDecode(auth);
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
        selectedCity,
        setSelectedCity,
      }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
