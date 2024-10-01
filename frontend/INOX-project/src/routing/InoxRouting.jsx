import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";
import SeatLayout from "../components/SeatLayout";

export let routingVar = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/seatlayout",
    element: <SeatLayout/>,
  },
]);
