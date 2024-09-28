import React from "react";
import GlobalContext from "./globalContext/GlobalContext";
import { routingVar } from "./routing/InoxRouting";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <GlobalContext>
      <RouterProvider router={routingVar} />
    </GlobalContext>
  );
};

export default App;
