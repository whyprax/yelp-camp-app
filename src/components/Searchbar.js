/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Searchbar = () => {
  return (
    <div className="bg-[#f9f6f1] mt-10 px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-16 rounded">
      <h1 className="text-black font-bold text-4xl sm:text-5xl mr-4">
        Welcome to YelpCamp!
      </h1>
      <p className="text-black opacity-60 mt-4 mb-5 lg:mt-5 text-[1.15rem] sm:text-xl sm:mr-12 lg:mr-[33.25rem]">
        View our hand-picked campgrounds from all over the world, or add your
        own.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          className="w-full sm:w-72 py-3 px-5 rounded outline outline-offset-1 outline-2 outline-gray-300 mr-4 placeholder:text-black placeholder:opacity-75"
          type="text"
          placeholder="&#128269; Search for Camps"
        />
        <input
          className="w-full sm:w-auto bg-black text-white font-bold rounded py-3 px-5 cursor-pointer"
          type="button"
          value="Search"
        />
      </form>
      <button className="my-6">
        <a
          className="text-black opacity-60 text-xl underline mr-[44rem]"
          href="#"
        >
          Or add your own background
        </a>
      </button>
    </div>
  );
};

export default Searchbar;
