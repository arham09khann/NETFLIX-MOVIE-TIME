import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    VideoTrailer: null,
    popularMovies: null,
    upcomingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.VideoTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addVideoTrailer,
  addPopularMovies,
  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
