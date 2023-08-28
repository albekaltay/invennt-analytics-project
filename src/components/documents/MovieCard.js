import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getSingleMovieAsync } from "@/redux/slices/movieSlice";
import Card from "@/components/base/Card"
const MovieCard = ({ movie,isGridWiew }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div>
        <Link
          href={`movie/${movie.imdbID}`}
          onClick={() => dispatch(getSingleMovieAsync(movie.imdbID))}
        >
          <div className={`flex  ${isGridWiew ? "flex-col" : "flex-row" }  justify-between`}>
            <div>
              <img
                className={`object-scale-down ${isGridWiew ? "h-auto w-auto" : "h-36"}  `}
                src={movie.Poster}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="py-4 px-2.5 text-end">
              <p className="text-md font-bold text-black mb-4">{movie.Title}</p>
              <p className="text-sm text-slate-400">
                <span className="font-semibold">ImdbID: </span>{" "}
                <span>{movie.imdbID}</span>
              </p>
              <p className="text-sm text-slate-400">
                <span className="font-semibold">Year: </span>{" "}
                <spann> {movie.Year}</spann>{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
</Card>
  );
};

export default MovieCard;
