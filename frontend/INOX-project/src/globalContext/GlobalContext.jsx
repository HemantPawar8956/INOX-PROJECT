import React, { createContext, useState } from "react";
export let globalVar = createContext();

const GlobalContext = ({ children }) => {
  let { Provider } = globalVar;
  let [siderVisible,setSiderVisible] = useState(false);

  return <Provider value={{siderVisible,setSiderVisible}}>{children}</Provider>;
};

export default GlobalContext;
