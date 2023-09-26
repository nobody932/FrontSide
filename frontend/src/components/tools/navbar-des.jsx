"use client"
import React from "react";
import { Link } from "react-router-dom";
import Articles from "../../pages/articles";
import Home from "../../pages/home";
import Movies from "../../pages/movies";
import News from "../../pages/news";
import Teams from"../../pages/teams";

const NavBar = () => (
  <nav className=" gradient-background  bg-red-800 py-3 flex justify-center ">
    <ul >
      <div>
        <img src="/1.png"height={100}
                  width={300}  />
      </div>
        <div className="grid grid-cols-4 space-x-5 text-center ">
      <li>
        <Link onClick={true} to="/articles">Articles</Link>
      </li>

      <li>
         <Link onClick={true} to="/news">News</Link>
      </li>

      <li>
        <Link onClick={true} to="/movies">Movies</Link>
      </li>

      <li>
        <Link onClick={true} to="/teams">Teams</Link>
      </li>

      </div>
    </ul>
  </nav>
);

export default NavBar;

NavBar()