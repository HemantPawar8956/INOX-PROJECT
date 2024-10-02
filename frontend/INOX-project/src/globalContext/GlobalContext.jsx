import React, { createContext, useState } from "react";
export let globalVar = createContext();

const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible,setSiderVisible] = useState(false);
  let [loginPanel,setLoginPanel] = useState(false);
  let [location ,setLocation] = useState(true);
  let [userLocation , setUserLocation] = useState("");
  console.log(userLocation)
  return <Provider value={{siderVisible,setSiderVisible,loginPanel,setLoginPanel,location ,setLocation,userLocation , setUserLocation}}>{children}</Provider>;
};

export default GlobalContext;
