import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";
import Home from "./../components/Home";
import Showtimings from "./../components/Showtimings";
import Cinemas from "./../components/Cinemas";

export let routingVar = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/showtimings",
        element: <Showtimings />,
      },
      {
        path: "/cinemas",
        element: <Cinemas />,
      },
      {
        path: "/Booking",
        element: <Cinemas />,
      },
    ],
  },
]);
