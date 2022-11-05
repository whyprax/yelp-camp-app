import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="px-6 sm:px-14 lg:px-32 py-6">
      <Navbar />
      <Searchbar />
      <Cards />
      <Footer />
    </div>
  );
};

export default Landing;
