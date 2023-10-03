import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Articles from "../../pages/articles";
import Movies from "../../pages/movies";
import News from "../../pages/news/index";
import Teams from "../../pages/teams";
import Dashboard from "../../pages/dashboard";
import MovieProvider from "../../components/context/movieProvider";
import NewsProvider from "../../components/context/newsProvider";
export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/movies",
    element: (
      <MovieProvider>
        <Movies />
      </MovieProvider>
    ),
  },
  {
    path: "/news",
    element: (
      <NewsProvider>
        <News />
      </NewsProvider>
    ),
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
