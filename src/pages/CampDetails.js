import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Map from "../Assets/Map.png";
import mountUlap from "../Assets/Camp Images/High Quality Images/MountULap.png";

const CampDetails = () => {
  return (
    <div className="px-6 sm:px-14 lg:px-32 py-6">
      <Navbar />
      <div className="my-10 flex flex-col-reverse gap-10 lg:flex-row">
        <div className="lg:basis-2/6 lg:h-max outline outline-offset-2 outline-1 outline-gray-300 rounded p-4 sm:p-12">
          <img className="w-full sm:h-96 object-cover" src={Map} alt="map" />
        </div>
        <div className="lg:basis-4/6 flex flex-col justify-center align-middle gap-8">
          <div className="outline outline-offset-2 outline-1 outline-gray-300 rounded p-4 sm:p-12">
            <img className="w-screen" src={mountUlap} alt="mountUlap" />
            <div className="flex flex-row justify-between items-baseline my-3">
              <h1 className="text-black text-xl sm:text-2xl font-bold">
                Mount Ulap
              </h1>
              <span className="font-semibold">$109.99/night</span>
            </div>
            <p className="text-gray-500 mb-4">
              One of the most famous hikes in Benguet is Mt Ulap in Itogon.
            </p>
            <span className="text-gray-500 italic">
              Submitted by Andrew Mike
            </span>
          </div>
          <div className="outline outline-offset-2 outline-1 outline-gray-300 rounded p-4 sm:p-12 flex flex-col gap-6">
            <div className="pb-4 border-b-4 mb-4">
              <div className="flex flex-row justify-between items-baseline">
                <h1 className="text-black text-xl font-bold">Adam Jones</h1>
                <span className="text-gray-500 mb-4">13h ago</span>
              </div>
              <p className="text-gray-500">
                Honestly one of the best expoeriences ever, took use a while to
                figure out how to get there but it was amazing!
              </p>
            </div>
            <div className="pb-4 border-b-4 mb-4">
              <div className="flex flex-row justify-between items-baseline">
                <h1 className="text-black text-xl font-bold">Adam Jones</h1>
                <span className="text-gray-500 mb-4">13h ago</span>
              </div>
              <p className="text-gray-500">
                Honestly one of the best expoeriences ever, took use a while to
                figure out how to get there but it was amazing!
              </p>
            </div>
            <div className="pb-4 border-b-4 mb-4">
              <div className="flex flex-row justify-between items-baseline">
                <h1 className="text-black text-xl font-bold">Adam Jones</h1>
                <span className="text-gray-500 mb-4">13h ago</span>
              </div>
              <p className="text-gray-500">
                Honestly one of the best expoeriences ever, took use a while to
                figure out how to get there but it was amazing!
              </p>
            </div>
            <button className="flex gap-2 justify-center items-center bg-black mb-4 text-white font-bold rounded py-4 px-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              Leave a review
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampDetails;
