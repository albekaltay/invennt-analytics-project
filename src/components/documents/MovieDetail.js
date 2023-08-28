import React, { useEffect } from "react";
import Card from "../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovieAsync } from "@/redux/slices/movieSlice";
import Loading from "../loadings/Loading";
import Rating from "../custom/Raiting";

const MovieDetail = () => {
  const singleMovie = useSelector((state) => state.movies.singleMovie);
  const getSingleMoviesIsLoading = useSelector(
    (state) => state.movies.getSingleMoviesIsLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (singleMovie.imdbID === undefined) {
      const movieId = window.location.pathname.split("/")[2];
      dispatch(getSingleMovieAsync(movieId));
    }
    console.log(singleMovie.imdbID);
  }, []);

  if (getSingleMoviesIsLoading) return <Loading />;

  return (
    <Card>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex justify-center">
          <img
            className="rounded-md h-auto w-auto"
            src={singleMovie.Poster}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="flex flex-col w-full px-6 py-4">
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-center sm:text-start mb-6">
              {singleMovie.Title}{" "}
            </span>
            <span className="mb-2 text-center">
              <Rating rating={Number(singleMovie.imdbRating)} />
            </span>

            <p className="flex justify-center-center sm:text-start"></p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">ImdbID: </span>{" "}
              <span>{singleMovie.imdbID}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Year: </span>{" "}
              <span>{singleMovie.Year}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Run Time: </span>{" "}
              <span>{singleMovie.Runtime}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Genre: </span>{" "}
              <span>{singleMovie.Genre}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Writer: </span>{" "}
              <span>{singleMovie.Writer}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Actors: </span>{" "}
              <span>{singleMovie.Actors}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Plot: </span>{" "}
              <span>{singleMovie.Plot}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Country: </span>{" "}
              <span>{singleMovie.Country}</span>
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-start">
              <span className="font-semibold">Language: </span>{" "}
              <span>{singleMovie.Language}</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieDetail;
