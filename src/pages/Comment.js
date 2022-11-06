import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Comment = () => {
  return (
    <div className="flex flex-col justify-center align-middle px-6 sm:px-14 lg:px-32 py-6 text-gray-500">
      <Navbar />
      <div className="mt-10 lg:mt-20 sm:mr-40 lg:mx-80">
        <h1 className="text-black text-4xl font-bold mb-8">Add New Comment</h1>
        <p className="text-xl font-semibold mb-4">Description</p>
        <textarea
          className="block w-full h-40 sm:h-48 outline outline-2 outline-gray-200 bg-gray-100 px-4 py-4 rounded text-black"
          placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
        />
        <button className="mt-4 w-full bg-black text-white font-bold rounded py-3 px-5 cursor-pointer">
          Post Comment
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Comment;
