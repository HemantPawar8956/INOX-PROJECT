import React, { createContext, useState } from "react";

export let globalVar = createContext();
const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible, setSiderVisible] = useState(false);
  let [loginPanel, setLoginPanel] = useState(false);
  let [location, setLocation] = useState(true);
  let [userLocation, setUserLocation] = useState("");
  let auth = JSON.parse(localStorage.getItem("auth"));
  console.log(auth);
  
  let [loginType, setLoginType] = useState(auth?.user?.role || "USER");

  let loginTypes = [
    {
      loginName: "Admin",
      loginVal: "Admin",
    },
    {
      loginName: "Users",
      loginVal: "Users",
    },
  ];

  return (
    <Provider
      value={{
        siderVisible,
        setSiderVisible,
        loginPanel,
        setLoginPanel,
        location,
        setLocation,
        userLocation,
        setUserLocation,
        loginTypes,
        loginType,
        setLoginType
      }}>
      {children}
    </Provider>
  );
};

export default GlobalContext;
