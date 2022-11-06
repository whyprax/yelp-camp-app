/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Logo from "../Assets/Logo.svg";
import Hero from "../Assets/Hero Image.jpg";
import HeroMobile from "../Assets/HeroMobile.jpg";
import Checkmark from "../Assets/Checkmark.svg";
import Airbnb from "../Assets/Airbnb.svg";
import Booking from "../Assets/Booking.svg";
import PlaumGuide from "../Assets/Plum Guide.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [heroImage, setHeroImage] = useState(Hero);

  useEffect(() => {
    if (windowSize < 768) {
      setHeroImage(HeroMobile);
      console.log(HeroMobile);
    } else {
      setHeroImage(Hero);
    }

    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return (
    <div className="bg-[#f9f6f1] flex lg:flex-row flex-col h-full lg:h-screen text-gray-500 pl-6 sm:pl-14 lg:pl-32">
      <div className="w-fit block lg:hidden cursor-pointer">
        <img
          className="w-fit px-8 py-4 sm:px-16 sm:py-8"
          src={Logo}
          alt="yelpcamp-logo"
        />
      </div>

      <div className="w-full flex flex-col-reverse justify-between lg:flex-row">
        <div className="flex flex-1 lg:flex-col px-8 pt-8 sm:pt-8 sm:pl-16 gap-20 md:pl-26">
          <img
            className="w-fit hidden lg:block"
            src={Logo}
            alt="yelpcamp-logo"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-black leading-tight lg:text-7xl md:text-5xl text-4xl font-bold pr-16 sm:pb-4 sm:pr-4">
              Explore the best camps on Earth.
            </h1>
            <div className="text-lg mt-2 mb-1 sm:mb-3 pr-4 sm:pr-56">
              YelpCamp is a curated list of the bes camping spots on Earth.
              Unfiltered and unbiased reviews.
            </div>
            <ul className="list-none mt-2">
              <li className="mb-2 sm:mb-3 font-semibold">
                <img className="inline mr-2" src={Checkmark} alt="Checkmark" />
                Add your own camp suggestions.
              </li>
              <li className="mb-2 sm:mb-3 font-semibold">
                <img className="inline mr-2" src={Checkmark} alt="Checkmark" />
                Leave reviews and experiences
              </li>
              <li className="mb-2 sm:mb-3 font-semibold">
                <img className="inline mr-2" src={Checkmark} alt="Checkmark" />
                See locations for all camps
              </li>
            </ul>
            <Link to="/landing">
              <button className="bg-black text-white font-bold rounded mt-3 py-3 px-5">
                View Campgrounds
              </button>
            </Link>
            <span className="block font-semibold mt-8 mb-2">
              Partnered with:
            </span>
            <div className="flex">
              <img src={Airbnb} className="w-[8rem] h-full" alt="air-logo" />
              <img src={Booking} className="w-[8rem] h-full" alt="air-logo" />
              <img
                src={PlaumGuide}
                className="w-[8rem] h-full"
                alt="air-logo"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-auto h-80 flex justify-end">
          <img
            className="lg:h-full h-80 w-full object-cover object-bottom"
            src={heroImage}
            alt="Hero-Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
