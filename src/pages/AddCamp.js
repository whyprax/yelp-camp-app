/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddCamp = () => {
  return (
    <div className="flex flex-col justify-center align-middle px-6 sm:px-14 lg:px-32 py-6 text-gray-500">
      <Navbar />
      <div className="mt-10 lg:mt-20 sm:mr-40 lg:mx-80">
        <form className="flex flex-col">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold pr-16 sm:pr-0 lg:pr-4 mb-10 sm:mb-8">
            Add New Campgroup
          </h1>
          <label className="font-semibold mb-2">Campgroup Name</label>
          <input
            className=" w-full sm:w-5/6 lg:w-3/4 py-3 px-5 mb-4 rounded outline outline-2 outline-gray-200 placeholder:bg-gray-100 placeholder:opacity-75"
            type="text"
            placeholder="Search any User"
          />
          <label className="font-semibold mb-2">Price</label>
          <input
            className=" w-full sm:w-5/6 lg:w-3/4 py-3 px-5 mb-4 rounded outline outline-2 outline-gray-200 placeholder:bg-gray-100 placeholder:opacity-75"
            type="number"
            placeholder="Price"
          />
          <label className="font-semibold pr-16 sm:pr-0 lg:pr-4 mb-2">
            Involved
          </label>
          <input
            className="w-full sm:w-5/6 lg:w-3/4 py-3 px-5 mb-4 rounded outline outline-2 outline-gray-200 placeholder:bg-gray-100 placeholder:opacity-75"
            type="file"
            placeholder="Price"
          />
          <label className="font-semibold pr-16 sm:pr-0 lg:pr-4 mb-2">
            Description
          </label>
          <textarea
            className="block w-full h-40 sm:h-48 outline outline-2 outline-gray-200 bg-gray-100 px-4 py-4 rounded text-black"
            placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
          />
          <input
            type="submit"
            value="Add CampGroup"
            className="mt-4 w-full bg-black text-white font-bold rounded py-3 px-5 cursor-pointer"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddCamp;
