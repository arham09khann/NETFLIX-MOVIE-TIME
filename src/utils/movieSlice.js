import { createSlice } from "@reduxjs/toolkit";

const moviieSlice = createSlice({
  name: "movie",
  initialState: { nowPlayingMovies: null, VideoTrailer: null },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      state.VideoTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addVideoTrailer } = moviieSlice.actions;
export default moviieSlice.reducer;
