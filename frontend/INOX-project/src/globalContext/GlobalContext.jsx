import React, { createContext, useState } from "react";
export let globalVar = createContext();

const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible,setSiderVisible] = useState(false);
  let [loginPanel,setLoginPanel] = useState(false);

  return <Provider value={{siderVisible,setSiderVisible,loginPanel,setLoginPanel}}>{children}</Provider>;
};

export default GlobalContext;
