import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "f5cd5737";
const BASE_URL = "https://www.omdbapi.com";

export const getMoviesAsync = createAsyncThunk("movies/getMovies", async () => {
  const response = await axios(`${BASE_URL}/?apikey=${API_KEY}&page=1&s=all`);
  return response.data;
});

export const getSingleMovieAsync = createAsyncThunk(
  "movie/getSingleMovie",
  async (imdbID) => {
    const response = await axios(`${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}`);
    return response.data;
  }
);

export const getSearchedMovieAsync = createAsyncThunk(
  "movie/getSearchedMovie",
  async (params) => {
    const searchedMovie = params.searchedMovie ? params.searchedMovie : "all";
    const { movieYear, movieType, currentPage } = params;
    const response = await axios(
      `${BASE_URL}/?apikey=${API_KEY}&s=${searchedMovie}&y=${movieYear}&type=${movieType}&page=${currentPage}`
    );
    return response.data;
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  singleMovie: {},
  getMoviesIsLoading: true,
  getSingleMoviesIsLoading: true,
  error: "",
  totalMovies: 0,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getMoviesAsync.pending]: (state) => {
      state.getMoviesIsLoading = true;
    },
    [getMoviesAsync.fulfilled]: (state, action) => {
      state.items = action.payload.Search;
      state.filteredItems = action.payload.Search;
      state.totalMovies = Number(action.payload.totalResults);
      state.getMoviesIsLoading = false;
    },
    [getSingleMovieAsync.pending]: (state) => {
      state.getSingleMoviesIsLoading = true;
    },
    [getSingleMovieAsync.fulfilled]: (state, action) => {
      state.singleMovie = action.payload;
      state.getSingleMoviesIsLoading = false;
    },
    [getSearchedMovieAsync.pending]: (state) => {
      state.getMoviesIsLoading = true;
    },
    [getSearchedMovieAsync.fulfilled]: (state, action) => {
      if (action.payload.Response === "True") {
        state.filteredItems = action.payload.Search;
        state.totalMovies = Number(action.payload.totalResults);
        state.getMoviesIsLoading = false;
      } else {
        state.getMoviesIsLoading = false;
        state.error = action.payload.Error;
        state.filteredItems = [];
      }
    },
  },
});

export default moviesSlice.reducer;
