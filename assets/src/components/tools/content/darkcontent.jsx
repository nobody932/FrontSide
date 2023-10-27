"use client";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ImgStyle = {
  backgroundImage:
    'url(https://images.pexels.com/photos/210979/pexels-photo-210979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
};

function DarkContentA(props) {
  return (
    <section className=" body-font py-10  ml-7 flex-auto ">
      <div></div>
      <div
        className="container w-full px-5 py-24 mx-auto" style={{
          backgroundImage:
            ' url("https://images.unsplash.com/photo-1496886077455-6e206da90837?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        
        }}
      >
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-500 ">
            Bienvenue Sur Front-Side
          </h1>
          <p className="lg:w-2/3 mx-auto text-slate-500 leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-slate-500  text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a href className={`text-slate-800 inline-flex items-center`}>
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base text-slate-500 mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-slate-800 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">
              Neptune
            </h2>
            <p className="leading-relaxed text-base mb-4 text-slate-500">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-slate-800 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
            <h2 className="text-lg sm:text-xl text-red-500 font-medium title-font mb-2">
              Melanchole
            </h2>
            <p className="leading-relaxed text-slate-500 text-base mb-4">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-slate-800 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <button
          href="/register"
          className={`flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
        >
          <Link onClick={true} to="/register">
            Sign up
          </Link>
        </button>
      </div>
    </section>
  );
}

DarkContentA.defaultProps = {
  theme: "indigo",
};

DarkContentA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default DarkContentA;
