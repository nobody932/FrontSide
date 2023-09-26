"use client"
import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => (
  <nav className=" gradient-background  bg-red-800 py-3 flex justify-center ">
    <ul >
      <div>
        <img src="/https://www.shutterstock.com/image-vector/funny-skateboard-skate-park-vintage-600w-1975970261.jpg"height={100}
                  width={300}  />
      </div>
        <div className="grid grid-cols-5 space-x-5 text-center ">
        <li>
        <Link onClick={true} to="/">Acceuil</Link>
      </li> <li>
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