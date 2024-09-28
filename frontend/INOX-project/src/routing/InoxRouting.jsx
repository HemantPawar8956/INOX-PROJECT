import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";

export let routingVar = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
