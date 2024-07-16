import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  // const nowPlayingMovies = useSelector(
  //   (store) => store.movie.addNowPlayingMovies
  // );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
