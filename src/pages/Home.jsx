import React from "react";
import { Main, Row } from "../components";
import {
  requestHorror,
  requestPopular,
  requestTopRated,
  requestTrending,
  requestUpcoming,
} from "../utils";

const Home = () => {
  const rowTitle = ["Up Coming", "Popular", "Trending", "Top Rated", "Horror"];
  const rowObject = {
    upcoming: requestUpcoming,
    popular: requestPopular,
    trending: requestTrending,
    toprated: requestTopRated,
    horror: requestHorror,
  };

  const trimAndLowerCase = (str) => {
    let newStr = str.replace(/\s+/g, "").toLowerCase();
    return newStr;
  };

  return (
    <>
      <Main />
      {rowTitle.map((title) => (
        <Row title={title} url={rowObject[trimAndLowerCase(title)]} />
      ))}
    </>
  );
};

export default Home;
