import React, { useEffect, useState } from "react";
import { fetchApi, requestPopular } from "../utils";
export const BASE_URL = "https://image.tmdb.org/t/p";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies && movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    fetchApi(requestPopular).then((res) => setMovies(res));
  }, []);

  const truncateString = (str, num) => {
    if (str && str.length > num) {
      return str && str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`${BASE_URL}/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl py-4 object-contain font-bold">
            {movie?.title}
          </h1>
          <div className="">
            <button className="border bg-gray-300 text-black py-2 px-5">
              Play
            </button>
            <button className="border text-white ml-4 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-300 mt-4 text-md">
            Released : {movie?.release_date}
          </p>
          <p className="mt-2 object-contain w-full md:max-w-[70%] lg-max-w-[50%] xl:max-w-[35%] text-gray-300">
            {truncateString(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
