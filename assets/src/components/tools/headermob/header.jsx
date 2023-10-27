import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function DarkHeaderD(props) {
  return (
    <header className="text-gray-900 header body-font">
      <div style={{
        backgroundImage:
          ' url("https://media.istockphoto.com/id/696544488/fr/photo/patineur-de-sauter-sur-son-skate-au-skatepark.jpg?s=612x612&w=0&k=20&c=pfAfALOraBbxes0GV4HvSl9kE3HuvdE1U8bx1kO12D0=)',
      }} className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center uppercase text-red-600 mb-4 md:mb-0"
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
          <span href="" className="ml-3 text-xl">
            Front-Side
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/articles" className="mr-5 hover:text-white">
            Aritcles
          </a>
          <a href="/news" className="mr-5 hover:text-white">
            Nouveautés
          </a>
          <a href="/movies" className="mr-5 hover:text-white">
            Parts
          </a>
          <a href="/teams" className="mr-5 hover:text-white">
            Teams
          </a>
          <a href="/stores" className="mr-5 hover:text-white">
            Magasin
          </a>
        </nav>
        <button className="inline-flex items-center text-white hover:text-black bg-gray-800 glass border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <Link onClick={true} to="/dashboard">
            Compte{" "}
          </Link>
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
