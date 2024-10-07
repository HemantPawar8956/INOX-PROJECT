import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";

import Home from "./../components/Home";
import Showtimings from "./../components/Showtimings";
import Cinemas from "./../components/Cinemas";
import Payment from "./../components/Payment";
import SeatLayout from "./../components/SeatLayout";
import Addtheatre from "../components/Addtheatre";
import MovieTicket from "./../components/MovieTicket";
import Addmovie from './../components/Addmovie';
import ProtectedRoute from "./../Auth/ProtectedRoute";
import AllBookings from "../components/AllBookings";
import SelectLocation from "./../components/SelectLocation";
import SignUp from "../pages/SignUp";
import LoginPage from "../pages/LoginPage";

export let routingVar = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "selectlocation",
        element: <SelectLocation />,
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
      {
        path: "/allbookings",
        element: <AllBookings />,
      },
    ],
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>

    ),
  },
  {
    path: "/addmovie",
    element: <Addmovie />,
  },
  {
    path: "/addtheatre",
    element: <Addtheatre />,
  },
  {
    path: "/selectseats",
    element: <SeatLayout />,
  },
    {
      path: "/login",
      element: <LoginPage />,
    },
  {
    path: "/movieTicket",
    element: <MovieTicket />,
  },

   {
    path: "/signup",
    element: <SignUp />,
  }, 

]);
