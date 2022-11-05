import React from "react";
import { Camps } from "../data/CardsData";

const Cards = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between gap-8">
      {Camps.map((Camp) => (
        <div className="basis-[31.5%] p-4 border-solid border-4 border-gray-100 rounded">
          <img
            className="w-screen h-[240px] object-cover rounded"
            src={Camp.img}
            alt=""
          />
          <h1 className="text-black text-3xl font-bold mt-5 mb-3">{Camp.name}</h1>
          <p className="text-gray-600 w-auto mb-4">{Camp.desc}</p>
          <button className="bg-black text-white w-full rounded p-3 mb-2">
            View CampGround
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
