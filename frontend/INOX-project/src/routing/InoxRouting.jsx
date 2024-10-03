import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";
<<<<<<< HEAD
import Home from "./../components/Home";
import Showtimings from "./../components/Showtimings";
import Cinemas from "./../components/Cinemas";
import Payment from "./../components/Payment";
import SeatLayout from "./../components/SeatLayout";
=======
import SeatLayout from "../components/SeatLayout";
>>>>>>> c391d100b6ca7084ab64d91b103dfa579743cb21

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
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/selectseats",
    element: <SeatLayout />,
  },
  {
    path: "/seatlayout",
    element: <SeatLayout/>,
  },
]);
