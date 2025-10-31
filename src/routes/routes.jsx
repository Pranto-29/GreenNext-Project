


import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import PlantDetails from "../pages/PlantDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authlayout from "../layout/Authlayout";
import MainLayout from "../layout/MainLayout"; //

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "details/:id",
        element: <PlantDetails />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/auth",
    element: <Authlayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
