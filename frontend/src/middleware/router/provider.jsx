import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Articles from "../../pages/articles";
import Movies from "../../pages/movies";
import News from "../../pages/news";
import Teams from "../../pages/teams";
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
   {
    path:"/movies",
   element:<Movies/>,
},   
{
  path:"/news",
 element:<News/>,
},
{
  path:"/teams",
 element:<Teams/>,
},   
]);