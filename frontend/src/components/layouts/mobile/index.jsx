"use client"
import React from "react";
import { Link } from "react-router-dom";
const FooterMobile = () => {
  return (
    <footer className="hidden bg-amber-700 text-blue-500 border border-black lg:flex flex-col">
      <div className="py-2">
        <div className="grid grid-cols items-center text-center uppercase text-xs ">
          <p>FrontSide  </p>
          <p>&copy; Copyright - 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile ;