import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className=" bg-red-800 ">
    <ul >
      <div>
        <img src="/FrontSide/frontend/src/images/1.png" alt="" srcset="" />
      </div>
        <div className="grid grid-cols-6">
      <li>
        <Link to="/FrontSide/frontend/src/pages/articles.jsx">Articles</Link>
      </li>

      <li>
        <Link to="/FrontSide/frontend/src/pages/news.jsx">News</Link>
      </li>

      <li>
        <Link to="/FrontSide/frontend/src/pages/movies.jsx">Movies</Link>
      </li>

      <li>
        <Link to="/about">Teams</Link>
      </li>

      <li>
        <Link to="/FrontSide/frontend/src/pages/">Products</Link>
      </li></div>
    </ul>
  </nav>
);

export default NavBar;

NavBar()