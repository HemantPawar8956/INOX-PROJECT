import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";
import Home from "./../components/Home";
import Showtimings from "./../components/Showtimings";
import Cinemas from "./../components/Cinemas";
import Payment from "./../components/Payment";
import SeatLayout from "./../components/SeatLayout";
import ProtectedRoute from "./../Auth/ProtectedRoute";
import LoginPage from "./../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import SignUp from "../pages/SignUp";

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
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
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
    path: "/signup",
    element: <SignUp/>, 
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminPage/>
      </ProtectedRoute>
    )
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <UserPage/>
      </ProtectedRoute>
    )
  }
  
]);
