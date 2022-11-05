import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Landing = () => {
  return (
    <div className="px-6 sm:px-14 lg:px-32 py-6">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Landing;
