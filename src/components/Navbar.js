/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="flex">
        <img className="w-fit" src={Logo} alt="yelpcamp-logo" />
        <a href="">Home</a>
      </div>
      <div>
        <button>Log In</button>
        <button>Create an account</button>
      </div>
    </div>
  );
};

export default Navbar;
