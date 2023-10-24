"use client";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function DarkHeaderD(props) {
  return (
    <header className="text-gray-400 bg-slate-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href
          className="flex title-font font-medium items-center text-red-600 mb-4 md:mb-0"
        >
          <svg
            xmlns=""
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className={`w-10 h-10  p-2 bg-${props.theme}-500 rounded-full`}
            viewBox="0 0 24 24"
          >
          <img src="/1.png" alt="" srcset="" />
          </svg>
          <span href="/" className="ml-3 text-xl">Front-Side</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/articles" className="mr-5 hover:text-white">
            Aritcles
          </a>
          <a href="/news" className="mr-5 hover:text-white">
            News
          </a>
          <a href="/movies" className="mr-5 hover:text-white">
            Movies
          </a>
          <a href="/teams" className="mr-5 hover:text-white">
            Teams
          </a>
          <a href="/stores" className="mr-5 hover:text-white">
            Stores
          </a>
        </nav>
        <button  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <Link onClick={true} to="/dashboard">Compte </Link>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

DarkHeaderD.defaultProps = {
  theme: "indigo",
};

DarkHeaderD.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkHeaderD;
