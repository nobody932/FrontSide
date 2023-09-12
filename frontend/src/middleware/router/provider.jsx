import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Articles from "../../pages/articles";
// import Profil from "../../pages/Dashboard";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
 {
       path:"/articles",
      element:<Articles/>,
   },
]);