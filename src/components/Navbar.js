import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import HamburgerMenu from "../Assets/HamburgerMenu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex justify-between flex-col text-gray-500">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Link to="/landing">
            <img className="w-fit" src={Logo} alt="yelpcamp-logo" />
          </Link>
          <Link to="/">
            <span className="font-semibold cursor-pointer hidden lg:block">
              Home
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="/login">
            <button className="font-semibold cursor-pointer">Log In</button>
          </Link>
          <button className="bg-black text-white font-bold rounded py-3 px-5">
            Create an Account
          </button>
        </div>
        <div className="flex lg:hidden gap-6 items-center">
          <button
            className="bg-[#f9f6f1] p-2 rounded"
            onClick={() => setNavbar(!navbar)}
          >
            <img
              src={HamburgerMenu}
              alt="HamburgerMenu"
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
      {navbar && (
        <div className="mt-4 border-solid border-2 border-gray-100 px-8 py-4">
          <ul className="flex justify-between">
            <li>
              <button className="font-semibold rounded py-2 px-3">Home</button>
            </li>
            <li>
              <button className="font-semibold rounded py-2 px-3">
                Log In
              </button>
            </li>
            <li>
              <button className="bg-black text-white font-semibold rounded py-2 px-3">
                Create an Account
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
