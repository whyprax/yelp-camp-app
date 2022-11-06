/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.svg";
import UserTestimonial from "../Assets/User Testimonial.svg";

const Login = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row text-gray-500">
      <div className="basis-2/4 lg:basis-7/12 px-6 sm:px-14 lg:px-32 py-6 mb-4">
        <div className="flex justify-between items-center mb-12 lg:mb-36">
          <img className="w-fit" src={Logo} alt="yelpcamp-logo" />
          <a
            href="#"
            className="flex justify-center items-center gap-1 font-semibold cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Campgrounds
          </a>
        </div>
        <form className="flex flex-col">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold pr-16 sm:pr-0 lg:pr-4 mb-10 sm:mb-8">
            Start exploring camps from all around the world.
          </h1>
          <label className="font-semibold mb-2">Username</label>
          <input
            className=" w-full sm:w-5/6 lg:w-3/4 py-3 px-5 mb-4 rounded outline outline-2 outline-gray-200 placeholder:bg-gray-100 placeholder:opacity-75"
            type="text"
            placeholder="johndoe_91"
          />
          <label className="font-semibold mb-2">Password</label>
          <input
            className=" w-full sm:w-5/6 lg:w-3/4 py-3 px-5 mb-6 rounded outline outline-2 outline-gray-200 placeholder:bg-gray-100 placeholder:opacity-75"
            type="password"
            placeholder="Choose your password"
          />
          <input
            className="w-full sm:w-5/6 lg:w-3/4 bg-black mb-4 text-white font-bold rounded py-3 px-5 cursor-pointer"
            type="submit"
            value="Log in"
          />
          <span>
            Not a user yet?
            <a href="#" className="underline ml-2 text-blue-600 font-semibold">
              Create an account
            </a>
          </span>
        </form>
      </div>
      <div className="bg-[#f9f6f1] basis-2/4 lg:basis-5/12 px-6 sm:px-14 lg:px-40 py-6 flex flex-col lg:justify-center">
        <p className="text-black text-2xl font-bold mb-10 tracking-wide">
          “YelpCamp has honestly saved me hours of research time, and the camps
          on here are definitely well picked and added.”
        </p>
        <div className="flex gap-3">
          <img src={UserTestimonial} alt="UserTestimonial" />
          <div className="flex flex-col">
            <h1 className="text-black font-bold">May Andrews</h1>
            <span>Professional Hiker</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
