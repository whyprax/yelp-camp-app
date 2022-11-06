import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

const Footer = () => {
  return (
    <Link to="/landing">
      <div className="my-20">
        <img className="w-fit" src={Logo} alt="yelpcamp-logo" />
      </div>
    </Link>
  );
};

export default Footer;
