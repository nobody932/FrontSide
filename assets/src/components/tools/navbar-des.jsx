"use client";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className=" gradient-background2  bg-red-800 py-3 flex justify-center text-neutral-200 ">
    <ul>
      <div>
        <img
          src=""
          
        />
      </div>
      <div className="grid grid-cols-7 space-x-5 text-center ">
        <li>
          <Link onClick={true} to="/">
            Acceuil
          </Link>
        </li>{" "}
        <li>
          <Link onClick={true} to="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link onClick={true} to="/news">
            News
          </Link>
        </li>
        <li>
          <Link onClick={true} to="/movies">
            Movies
          </Link>
        </li>
        <li>
          <Link onClick={true} to="/teams">
            Teams
          </Link>
        </li>
        <li>
          <Link onClick={true} to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link onClick={true} to="/stores">
            Store
          </Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default NavBar;

NavBar();
