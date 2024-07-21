import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondryContainer() {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);

  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />

        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />

        <MovieList title={"Now Playing"} movies={movies} />

        <MovieList title={"Now Playing"} movies={movies} />
      </div>
    </div>
  );
}

export default SecondryContainer;
