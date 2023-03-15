import React from "react";
import { BASE_URL } from "./Main";

const Movie = ({ item }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`${BASE_URL}/original${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute  top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-md font-bold flex justify-center items-center text-center h-full">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
