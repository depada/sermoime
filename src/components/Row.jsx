import React, { useEffect, useState } from "react";
import { fetchApi } from "../utils";

import Movie from "./Movie";

const Row = ({ title, url }) => {
  const [rowMovies, setRowMovies] = useState([]);
  useEffect(() => {
    fetchApi(url).then((response) => setRowMovies(response));
  }, [url]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap"
        >
          {rowMovies.map((movie, id) => (
            <Movie key={id} item={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
