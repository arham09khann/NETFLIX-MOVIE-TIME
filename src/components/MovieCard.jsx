import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="movie_image" src={MOVIE_IMG_CDN + posterPath}></img>
    </div>
  );
};

export default MovieCard;
