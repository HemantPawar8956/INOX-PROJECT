import React, { createContext, useState } from "react";
export let globalVar = createContext();
// import jwt_decode from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [addr,setAddr]=useState(false);
  let [deletem,setDeletem]=useState(false);

  let [siderVisible, setSiderVisible] = useState(false);
  let [loginPanel, setLoginPanel] = useState(false);
  let [moviePanel, setMoviePanel] = useState(false);
  let [addthatrePanel, setAddTheatrePanel] = useState(false);
  let [location, setLocation] = useState(true);
  let [signupPanel, setSignupPanel] = useState(false);
  let [userLocation, setUserLocation] = useState("");
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [updateNotify, setupdateNotify] = useState(false);
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

  return (
    <Provider
      value={{
        deletem,
        setDeletem,
        addr,
        setAddr,
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
      }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
