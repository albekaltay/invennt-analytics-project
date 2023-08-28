import { Inter } from "next/font/google";
import AppContainer from "@/components/layout/AppContainer";
import Loading from "@/components/loadings/Loading";
import MovieCard from "@/components/documents/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../components/paginations/Paginations";
import { getSearchedMovieAsync } from "../redux/slices/movieSlice";

const categories = [
  {
    name: "All Categories",
    value: "null",
  },
  {
    name: "Movies",
    value: "movie",
  },
  {
    name: "Series",
    value: "series",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGridWiew, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMovies = useSelector((state) => state.movies.filteredItems);
  const error = useSelector((state) => state.movies.error);
  const getMoviesIsLoading = useSelector(
    (state) => state.movies.getMoviesIsLoading
  );
  const totalMovies = useSelector((state) => state.movies.totalMovies);

  const [searchedMovie, setSearchedMovie] = useState("Pokemon");
  const [movieYear, setMovieYear] = useState("all");
  const [movieType, setMovieType] = useState(categories[0].value);

  const dispatch = useDispatch();

  const handleYearChange = (year) => {
    setMovieYear(year);
  };

  const handleFilteredMovies = () => {
    dispatch(
      getSearchedMovieAsync({
        searchedMovie,
        movieYear,
        movieType,
        currentPage,
      })
    );
  };

  useEffect(() => {
    handleFilteredMovies();
  }, [movieYear, currentPage, movieType]);

  const handleSearchChange = (event) => {
    setSearchedMovie(event.target.value);
  };

  const handleGetSearchedMovies = () => {
    handleFilteredMovies();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleGridView = () => {
    setIsGridView(true);
  };
  const handleListView = () => {
    setIsGridView(false);
  };
  return (
    <main>
      <AppContainer
        showController={true}
        currentPage={currentPage}
        searchedMovie={searchedMovie}
        handleSearchChange={handleSearchChange}
        handleGetSearchedMovies={handleGetSearchedMovies}
        movieYear={movieYear}
        setMovieYear={setMovieYear}
        movieType={movieType}
        setMovieType={setMovieType}
        categories={categories}
        handleYearChange={handleYearChange}
        handleGridView={handleGridView}
        handleListView={handleListView}
        isGridWiew={isGridWiew}
      >
        {getMoviesIsLoading && <Loading />}
        {error && filteredMovies.length === 0 ? (
          <div className="flex items-center justify-center h-full text-white">
            {" "}
            {error}{" "}
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div
              className={`grid gap-4 ${
                isGridWiew
                  ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-5"
                  : "grid-cols-1"
              }  px-10 sm:px-0`}
            >
              {filteredMovies.map((movie) => (
                <MovieCard
                  movie={movie}
                  key={movie.imdbID}
                  isGridWiew={isGridWiew}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalMovies={totalMovies}
              onPageChange={handlePageChange}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          </div>
        )}
      </AppContainer>
    </main>
  );
}
